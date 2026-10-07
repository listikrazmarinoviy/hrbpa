import * as THREE from "./assets/vendor/three.module.min.js";

const host = document.querySelector(".hero-earth");
const canvas = document.querySelector("#earth-canvas");

if (host && canvas) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  try {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 20);
    camera.position.set(0, 0, 3.55);

    const pivot = new THREE.Group();
    pivot.rotation.z = THREE.MathUtils.degToRad(-18);
    scene.add(pivot);

    const globeGroup = new THREE.Group();
    pivot.add(globeGroup);

    const textureLoader = new THREE.TextureLoader();
    const [dayTexture, nightTexture, cloudTexture] = await Promise.all([
      textureLoader.loadAsync("./assets/textures/earth-day.jpg"),
      textureLoader.loadAsync("./assets/textures/earth-night.jpg"),
      textureLoader.loadAsync("./assets/textures/earth-clouds.jpg"),
    ]);

    dayTexture.colorSpace = THREE.SRGBColorSpace;
    nightTexture.colorSpace = THREE.SRGBColorSpace;
    cloudTexture.colorSpace = THREE.SRGBColorSpace;
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    [dayTexture, nightTexture, cloudTexture].forEach((texture) => {
      texture.anisotropy = maxAnisotropy;
    });

    const sphereGeometry = new THREE.SphereGeometry(1, 96, 96);
    const earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        dayMap: { value: dayTexture },
        nightMap: { value: nightTexture },
        sunDirection: { value: new THREE.Vector3(-1.5, 0.65, 2.8).normalize() },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldNormal;
        varying vec3 vViewNormal;

        void main() {
          vUv = uv;
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          vViewNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D dayMap;
        uniform sampler2D nightMap;
        uniform vec3 sunDirection;
        varying vec2 vUv;
        varying vec3 vWorldNormal;
        varying vec3 vViewNormal;

        void main() {
          vec3 dayColor = texture2D(dayMap, vUv).rgb;
          vec3 nightColor = texture2D(nightMap, vUv).rgb;
          float sunAmount = dot(normalize(vWorldNormal), normalize(sunDirection));
          float daylight = smoothstep(-0.16, 0.22, sunAmount);
          float diffuse = max(sunAmount, 0.0);
          vec3 litDay = dayColor * (0.38 + diffuse * 0.92);
          vec3 litNight = nightColor * 1.85 + vec3(0.002, 0.008, 0.018);
          vec3 color = mix(litNight, litDay, daylight);
          float rim = pow(1.0 - max(dot(normalize(vViewNormal), vec3(0.0, 0.0, 1.0)), 0.0), 2.5);
          color += rim * vec3(0.06, 0.43, 0.62) * 0.72;
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const earth = new THREE.Mesh(sphereGeometry, earthMaterial);
    globeGroup.add(earth);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.15);
    keyLight.position.set(-2.4, 1.1, 3.6);
    scene.add(keyLight);
    scene.add(new THREE.HemisphereLight(0xb7efff, 0x02111b, 1.1));

    const cloudsMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      alphaMap: cloudTexture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.48,
      depthWrite: false,
      shininess: 8,
    });
    const clouds = new THREE.Mesh(new THREE.SphereGeometry(1.012, 96, 96), cloudsMaterial);
    globeGroup.add(clouds);

    const atmosphereMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexShader: `
        varying vec3 vViewNormal;
        void main() {
          vViewNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vViewNormal;
        void main() {
          float intensity = pow(0.73 - dot(vViewNormal, vec3(0.0, 0.0, 1.0)), 2.25);
          gl_FragColor = vec4(0.08, 0.72, 0.94, 1.0) * intensity * 0.7;
        }
      `,
    });
    const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.09, 72, 72), atmosphereMaterial);
    scene.add(atmosphere);

    let targetRotationX = -0.12;
    let targetRotationY = -2.77;
    let currentRotationX = targetRotationX;
    let currentRotationY = targetRotationY;
    let dragging = false;
    let previousPointer = { x: 0, y: 0 };
    let resumeRotationAt = 0;
    let visible = true;
    let lastFrame = performance.now();

    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(1, host.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const visibilityObserver = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    }, { threshold: 0.02 });
    visibilityObserver.observe(host);

    const releasePointer = (event) => {
      dragging = false;
      resumeRotationAt = performance.now() + 2200;
      if (event.pointerId !== undefined && canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }
      host.classList.remove("is-dragging");
    };

    canvas.addEventListener("pointerdown", (event) => {
      dragging = true;
      previousPointer = { x: event.clientX, y: event.clientY };
      canvas.setPointerCapture(event.pointerId);
      host.classList.add("is-dragging");
    });

    canvas.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const deltaX = event.clientX - previousPointer.x;
      const deltaY = event.clientY - previousPointer.y;
      previousPointer = { x: event.clientX, y: event.clientY };
      targetRotationY += deltaX * 0.007;
      targetRotationX = THREE.MathUtils.clamp(targetRotationX + deltaY * 0.006, -0.72, 0.72);
    });

    canvas.addEventListener("pointerup", releasePointer);
    canvas.addEventListener("pointercancel", releasePointer);
    canvas.addEventListener("dblclick", () => {
      targetRotationX = -0.12;
      targetRotationY = -2.77;
      resumeRotationAt = performance.now() + 1800;
    });

    const render = (now) => {
      requestAnimationFrame(render);
      if (!visible || document.hidden) {
        lastFrame = now;
        return;
      }

      const delta = Math.min(0.05, (now - lastFrame) / 1000);
      lastFrame = now;
      if (!reducedMotion && !dragging && now > resumeRotationAt) targetRotationY += delta * 0.055;

      currentRotationX = THREE.MathUtils.lerp(currentRotationX, targetRotationX, 0.085);
      currentRotationY = THREE.MathUtils.lerp(currentRotationY, targetRotationY, 0.085);
      globeGroup.rotation.x = currentRotationX;
      globeGroup.rotation.y = currentRotationY;
      if (!reducedMotion) clouds.rotation.y += delta * 0.018;
      renderer.render(scene, camera);
    };

    host.classList.add("is-ready");
    requestAnimationFrame(render);
  } catch (error) {
    host.classList.add("is-fallback");
    console.warn("Interactive Earth could not be initialized.", error);
  }
}
