(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const copy = {
    ru: {
      menu: "Меню", navAlliance: "Альянс", navResidency: "Резидентство", navConference: "Конференции", navJournal: "Журнал", navMatrix: "Матрица", joinShort: "Стать резидентом",
      heroEyebrow: "Ташкент · с 2023 года", heroTitle: "<span class=\"hero-title-line\">Деловая репутация</span><span class=\"hero-title-line hero-title-mark\">в движении</span>", heroText: "Ассоциация HR-бизнес-партнёров Узбекистана. Сообщество компаний, международная конференция и журнал BUSINESS HOLISTIC.", heroPrimary: "Стать резидентом", heroSecondary: "Попасть в журнал", heroSignal: "Люди<br />двигают<br />бизнес",
      statResidents: "компаний-партнёров", statCountries: "стран участников", statPrint: "экземпляров тиража", scroll: "Исследовать",
      allianceKicker: "Что мы создаём", allianceTitle: "Среду, в которой доверие<br />становится деловым капиталом", allianceText: "Объединяем компании, экспертов и государственные институты, чтобы знания превращались в связи, публичную экспертизу и совместные проекты.",
      principle1Title: "Стратегия", principle1Text: "Человеческий капитал становится частью бизнес-стратегии.", principle2Title: "Компетенции", principle2Text: "Практические решения и разбор реальных управленческих задач.", principle3Title: "Инструменты", principle3Text: "Аналитика, цифровые решения и современные методики.", principle4Title: "Сообщество", principle4Text: "Устойчивая сеть для партнёрств и совместных инициатив.",
      speakersKicker: "Кто выходил на нашу сцену", speakersTitle: "Люди, которые<br />формируют повестку", speakersText: "Руководители государственных институтов, лидеры бизнеса и международные эксперты.",
      speaker1: "Основатель BUSINESS HOLISTIC Alliance и HRBPA", speaker2: "Председатель Торгово-промышленной палаты Узбекистана", speaker3: "Председатель Ассоциации менеджеров Узбекистана", speaker4: "Председатель международной Ассоциации деловых женщин", speaker5: "Основательница сети магазинов Parfum Gallery", speaker6: "Международный советник и консультант", speaker7: "Профессор, руководитель группы консалтинговых услуг GIZ", speaker8: "Австрийский предприниматель", speaker9: "Депутат Ташкентского городского Кенгаша, международный спикер", speaker10: "Основатель компаний «EUROPOL» и «Nefrit»", speaker11: "Эксперт", drag: "Тяните, чтобы посмотреть",
      residencyKicker: "Резидентство", residencyTitle: "Три уровня<br />делового присутствия", residencyText: "Годовое участие даёт компании доступ к сообществу, событиям, медиа и совместным инициативам.", perYear: "в год", popular: "Главная орбита", choose: "Выбрать уровень",
      tier1a: "Закрытые профессиональные встречи", tier1b: "Присутствие на ресурсах альянса", tier1c: "Партнёрская сеть", tier2a: "Приоритет на ключевых событиях", tier2b: "Экспертное позиционирование", tier2c: "Информационное освещение", tier3a: "Максимальное присутствие бренда", tier3b: "Партнёрские спецпроекты", tier3c: "Публикации на особых условиях",
      conferenceKicker: "BUSINESS HOLISTIC", conferenceTitle: "Международная конференция.<br />Каждый год — новая точка роста.", year2023: "Открытие ассоциации", year2025: "Доверие как основа успеха", year2027: "Следующая орбита", edition: "конференция", attendees: "участников", countries: "стран", speakersCount: "спикеров",
      journalTitle: "Ваш опыт читают<br />там, где принимают решения", journalText: "Международный научно-деловой журнал с адресной дистрибуцией в VIP-вагонах, аэропортах, министерствах, посольствах и банках.", journalCta: "Забронировать публикацию", issueOne: "Выпуск № 01",
      matrixKicker: "Матрица Узбекистана", matrixTitle: "14 регионов.<br />Одна карта успеха.", matrixText: "Каждый регион представлен локальными брендами, деловой культурой и инвестиционным потенциалом.", selectedRegion: "Выбранный регион",
      partnersKicker: "Партнёрская сеть", partnersTitle: "организаций<br />на одной орбите",
      contactKicker: "Войти в орбиту HRBPA", contactTitle: "Деловая репутация<br />начинается с разговора", contactText: "Оставьте контакты — Секретариат Альянса свяжется с вами в течение рабочего дня.", companyLabel: "Компания", companyPlaceholder: "Название компании", nameLabel: "Контактное лицо", namePlaceholder: "Имя и должность", phoneLabel: "Телефон · Telegram", interestLabel: "Интересует", interestResidency: "Резидентство", interestJournal: "Публикация в журнале", interestConference: "Конференция", interestPartnership: "Партнёрский проект", submit: "Отправить запрос", privacy: "Отправляя форму, вы соглашаетесь на обработку персональных данных.", formReady: "Открываем письмо — проверьте данные и отправьте его.",
      footerAddressShort: "Республика Узбекистан · Ташкент · 100085", footerJoinText: "Приём заявок в резидентство открыт в течение всего года.", footerContactTitle: "Связаться", footerAddress: "Республика Узбекистан,<br />г. Ташкент, 100085", footerNavigationTitle: "Навигация", footerContactLink: "Контакты", footerSocialTitle: "Социальные сети", footerLegalTitle: "Правовая среда", footerLawSocial: "О социальном партнёрстве", footerLawEquality: "О равных правах и возможностях", footerLawNgo: "О негосударственных некоммерческих организациях", footerStrategy: "Стратегия «Узбекистан — 2030»", footerPartnerText: "Партнёр по мотивационному и кадровому консалтингу", footerDataTitle: "Данные и конфиденциальность", footerDataText: "На сайте нет рекламных и аналитических трекеров. В браузере локально сохраняется только выбранный язык интерфейса.", footerFormText: "Форма заявки передаёт только введённые вами данные через ваш почтовый клиент. По вопросам обработки данных: <a href=\"mailto:bilalova@bcguz.com\">bilalova@bcguz.com</a>.", footerPrivacy: "Конфиденциальность", footerDataLink: "Данные сайта", footerText: "HR Business Partners Association · Ташкент, Узбекистан"
    },
    uz: {
      menu: "Menyu", navAlliance: "Alyans", navResidency: "Rezidentlik", navConference: "Konferensiyalar", navJournal: "Jurnal", navMatrix: "Matritsa", joinShort: "Rezident bo‘lish",
      heroEyebrow: "Toshkent · 2023-yildan beri", heroTitle: "<span class=\"hero-title-line\">Ishbilarmonlik obro‘si</span><span class=\"hero-title-line hero-title-mark\">harakatda</span>", heroText: "O‘zbekiston HR biznes-hamkorlari assotsiatsiyasi. Kompaniyalar hamjamiyati, xalqaro konferensiya va BUSINESS HOLISTIC jurnali.", heroPrimary: "Rezident bo‘lish", heroSecondary: "Jurnalga kirish", heroSignal: "Insonlar<br />biznesni<br />harakatlantiradi",
      statResidents: "hamkor kompaniya", statCountries: "ishtirokchi davlat", statPrint: "nusxa tiraj", scroll: "Kashf etish",
      allianceKicker: "Biz nima yaratamiz", allianceTitle: "Ishonch biznes kapitaliga<br />aylanadigan muhit", allianceText: "Bilim aloqalar, ommaviy ekspertiza va qo‘shma loyihalarga aylanishi uchun kompaniyalar, mutaxassislar va davlat institutlarini birlashtiramiz.",
      principle1Title: "Strategiya", principle1Text: "Inson kapitali biznes strategiyasining bir qismiga aylanadi.", principle2Title: "Vakolatlar", principle2Text: "Amaliy yechimlar va real boshqaruv masalalari tahlili.", principle3Title: "Vositalar", principle3Text: "Tahlil, raqamli yechimlar va zamonaviy usullar.", principle4Title: "Hamjamiyat", principle4Text: "Hamkorlik va qo‘shma tashabbuslar uchun barqaror tarmoq.",
      speakersKicker: "Bizning sahnamizga chiqqanlar", speakersTitle: "Kun tartibini<br />belgilaydigan insonlar", speakersText: "Davlat institutlari rahbarlari, biznes yetakchilari va xalqaro ekspertlar.",
      speaker1: "BUSINESS HOLISTIC Alliance va HRBPA asoschisi", speaker2: "O‘zbekiston Savdo-sanoat palatasi raisi", speaker3: "O‘zbekiston menejerlar assotsiatsiyasi raisi", speaker4: "Xalqaro ishbilarmon ayollar assotsiatsiyasi raisi", speaker5: "Parfum Gallery do‘konlar tarmog‘ining asoschisi", speaker6: "Xalqaro maslahatchi va konsultant", speaker7: "Professor, GIZ konsalting xizmatlari guruhi rahbari", speaker8: "Avstriyalik tadbirkor", speaker9: "Toshkent shahar Kengashi deputati, xalqaro spiker", speaker10: "EUROPOL va Nefrit kompaniyalari asoschisi", speaker11: "Ekspert", drag: "Ko‘rish uchun suring",
      residencyKicker: "Rezidentlik", residencyTitle: "Biznes ishtirokining<br />uch darajasi", residencyText: "Yillik a’zolik kompaniyaga hamjamiyat, tadbirlar, media va qo‘shma tashabbuslardan foydalanish imkonini beradi.", perYear: "yiliga", popular: "Asosiy orbita", choose: "Darajani tanlash",
      tier1a: "Yopiq professional uchrashuvlar", tier1b: "Alyans resurslarida ishtirok", tier1c: "Hamkorlik tarmog‘i", tier2a: "Asosiy tadbirlarda ustuvorlik", tier2b: "Ekspert sifatida pozitsiyalash", tier2c: "Axborot yoritilishi", tier3a: "Brendning maksimal ishtiroki", tier3b: "Maxsus hamkorlik loyihalari", tier3c: "Maxsus shartlarda nashrlar",
      conferenceKicker: "BUSINESS HOLISTIC", conferenceTitle: "Xalqaro konferensiya.<br />Har yil — yangi o‘sish nuqtasi.", year2023: "Assotsiatsiya ochilishi", year2025: "Ishonch — muvaffaqiyat asosi", year2027: "Keyingi orbita", edition: "konferensiya", attendees: "ishtirokchi", countries: "davlat", speakersCount: "spiker",
      journalTitle: "Tajribangiz qarorlar qabul<br />qilinadigan joyda o‘qiladi", journalText: "VIP vagonlar, aeroportlar, vazirliklar, elchixonalar va banklarda manzilli tarqatiladigan xalqaro ilmiy-ishbilarmonlik jurnali.", journalCta: "Nashrni band qilish", issueOne: "№ 01 son",
      matrixKicker: "O‘zbekiston matritsasi", matrixTitle: "14 hudud.<br />Yagona muvaffaqiyat xaritasi.", matrixText: "Har bir hudud mahalliy brendlar, ishbilarmonlik madaniyati va investitsion salohiyat bilan namoyon bo‘ladi.", selectedRegion: "Tanlangan hudud",
      partnersKicker: "Hamkorlik tarmog‘i", partnersTitle: "tashkilot<br />bir orbitada",
      contactKicker: "HRBPA orbitasiga kiring", contactTitle: "Ishbilarmonlik obro‘si<br />suhbatdan boshlanadi", contactText: "Kontaktlaringizni qoldiring — Alyans kotibiyati bir ish kuni ichida siz bilan bog‘lanadi.", companyLabel: "Kompaniya", companyPlaceholder: "Kompaniya nomi", nameLabel: "Aloqa shaxsi", namePlaceholder: "Ism va lavozim", phoneLabel: "Telefon · Telegram", interestLabel: "Qiziqtiradi", interestResidency: "Rezidentlik", interestJournal: "Jurnalda nashr", interestConference: "Konferensiya", interestPartnership: "Hamkorlik loyihasi", submit: "So‘rov yuborish", privacy: "Formani yuborish orqali shaxsiy ma’lumotlarni qayta ishlashga rozilik bildirasiz.", formReady: "Xat ochilmoqda — ma’lumotlarni tekshiring va yuboring.",
      footerAddressShort: "O‘zbekiston Respublikasi · Toshkent · 100085", footerJoinText: "Rezidentlikka arizalar yil davomida qabul qilinadi.", footerContactTitle: "Bog‘lanish", footerAddress: "O‘zbekiston Respublikasi,<br />Toshkent shahri, 100085", footerNavigationTitle: "Navigatsiya", footerContactLink: "Bog‘lanish", footerSocialTitle: "Ijtimoiy tarmoqlar", footerLegalTitle: "Huquqiy muhit", footerLawSocial: "Ijtimoiy sheriklik to‘g‘risida", footerLawEquality: "Teng huquq va imkoniyatlar kafolatlari to‘g‘risida", footerLawNgo: "Nodavlat notijorat tashkilotlari to‘g‘risida", footerStrategy: "«O‘zbekiston — 2030» strategiyasi", footerPartnerText: "Motivatsiya va kadrlar konsaltingi bo‘yicha hamkor", footerDataTitle: "Ma’lumotlar va maxfiylik", footerDataText: "Saytda reklama va analitika trekerlari yo‘q. Brauzerda faqat tanlangan interfeys tili mahalliy saqlanadi.", footerFormText: "Ariza shakli faqat siz kiritgan ma’lumotlarni elektron pochta dasturingiz orqali yuboradi. Ma’lumotlarni qayta ishlash bo‘yicha savollar: <a href=\"mailto:bilalova@bcguz.com\">bilalova@bcguz.com</a>.", footerPrivacy: "Maxfiylik", footerDataLink: "Sayt ma’lumotlari", footerText: "HR Business Partners Association · Toshkent, O‘zbekiston"
    },
    en: {
      menu: "Menu", navAlliance: "Alliance", navResidency: "Residency", navConference: "Conferences", navJournal: "Journal", navMatrix: "Matrix", joinShort: "Become a resident",
      heroEyebrow: "Tashkent · since 2023", heroTitle: "<span class=\"hero-title-line\">Business reputation</span><span class=\"hero-title-line hero-title-mark\">in motion</span>", heroText: "Uzbekistan HR Business Partners Association. A business community, an international conference and BUSINESS HOLISTIC journal.", heroPrimary: "Become a resident", heroSecondary: "Get into the journal", heroSignal: "People<br />move<br />business",
      statResidents: "partner companies", statCountries: "participating countries", statPrint: "copies in circulation", scroll: "Explore",
      allianceKicker: "What we create", allianceTitle: "An environment where trust<br />becomes business capital", allianceText: "We connect companies, experts and public institutions so that knowledge turns into relationships, visible expertise and joint projects.",
      principle1Title: "Strategy", principle1Text: "Human capital becomes part of the business strategy.", principle2Title: "Expertise", principle2Text: "Practical solutions and analysis of real management challenges.", principle3Title: "Tools", principle3Text: "Analytics, digital solutions and modern methods.", principle4Title: "Community", principle4Text: "A lasting network for partnerships and joint initiatives.",
      speakersKicker: "Who has taken our stage", speakersTitle: "People who<br />shape the agenda", speakersText: "Heads of public institutions, business leaders and international experts.",
      speaker1: "Founder of BUSINESS HOLISTIC Alliance and HRBPA", speaker2: "Chairman of the Chamber of Commerce and Industry of Uzbekistan", speaker3: "Chairman of the Uzbekistan Managers Association", speaker4: "Chairwoman of the International Association of Business Women", speaker5: "Founder of the Parfum Gallery retail chain", speaker6: "International adviser and consultant", speaker7: "Professor and head of the GIZ consulting services group", speaker8: "Austrian entrepreneur", speaker9: "Member of the Tashkent City Council and international speaker", speaker10: "Founder of EUROPOL and Nefrit", speaker11: "Expert", drag: "Drag to explore",
      residencyKicker: "Residency", residencyTitle: "Three levels<br />of business presence", residencyText: "Annual membership gives your company access to the community, events, media and joint initiatives.", perYear: "per year", popular: "Main orbit", choose: "Choose level",
      tier1a: "Private professional meetings", tier1b: "Presence across alliance resources", tier1c: "Partner network", tier2a: "Priority at flagship events", tier2b: "Expert positioning", tier2c: "Media coverage", tier3a: "Maximum brand presence", tier3b: "Partner special projects", tier3c: "Preferred publication terms",
      conferenceKicker: "BUSINESS HOLISTIC", conferenceTitle: "International conference.<br />A new growth point every year.", year2023: "Association launch", year2025: "Trust as the foundation of success", year2027: "The next orbit", edition: "conference", attendees: "attendees", countries: "countries", speakersCount: "speakers",
      journalTitle: "Your experience is read<br />where decisions are made", journalText: "An international academic and business journal with targeted distribution in VIP trains, airports, ministries, embassies and banks.", journalCta: "Reserve a publication", issueOne: "Issue № 01",
      matrixKicker: "Uzbekistan matrix", matrixTitle: "14 regions.<br />One map of success.", matrixText: "Each region is represented through its local brands, business culture and investment potential.", selectedRegion: "Selected region",
      partnersKicker: "Partner network", partnersTitle: "organisations<br />in one orbit",
      contactKicker: "Enter the HRBPA orbit", contactTitle: "Business reputation<br />starts with a conversation", contactText: "Leave your details and the Alliance Secretariat will contact you within one business day.", companyLabel: "Company", companyPlaceholder: "Company name", nameLabel: "Contact person", namePlaceholder: "Name and title", phoneLabel: "Phone · Telegram", interestLabel: "Interested in", interestResidency: "Residency", interestJournal: "Journal publication", interestConference: "Conference", interestPartnership: "Partner project", submit: "Send request", privacy: "By submitting this form, you consent to the processing of personal data.", formReady: "Your email is opening — review the details and send it.",
      footerAddressShort: "Republic of Uzbekistan · Tashkent · 100085", footerJoinText: "Residency applications are open throughout the year.", footerContactTitle: "Contact", footerAddress: "Republic of Uzbekistan,<br />Tashkent, 100085", footerNavigationTitle: "Navigation", footerContactLink: "Contact", footerSocialTitle: "Social media", footerLegalTitle: "Legal framework", footerLawSocial: "On social partnership", footerLawEquality: "On guarantees of equal rights and opportunities", footerLawNgo: "On non-governmental non-profit organisations", footerStrategy: "Uzbekistan — 2030 Strategy", footerPartnerText: "Motivation and HR consulting partner", footerDataTitle: "Data and privacy", footerDataText: "The website uses no advertising or analytics trackers. Only the selected interface language is stored locally in your browser.", footerFormText: "The application form transfers only the data you enter through your email client. For data processing questions: <a href=\"mailto:bilalova@bcguz.com\">bilalova@bcguz.com</a>.", footerPrivacy: "Privacy", footerDataLink: "Site data", footerText: "HR Business Partners Association · Tashkent, Uzbekistan"
    }
  };

  const conferences = {
    2023: { edition: "I", attendees: "150", countries: "8", speakers: "18", image: "assets/conference-2023.webp", imagePosition: "center 42%", name: { ru: "Открытие ассоциации", uz: "Assotsiatsiya ochilishi", en: "Association launch" } },
    2024: { edition: "II", attendees: "260", countries: "13", speakers: "24", image: "assets/conference-2024.webp", imagePosition: "center 38%", name: { ru: "Объединить всех", uz: "Barchani birlashtirish", en: "Unite everyone" } },
    2025: { edition: "III", attendees: "320", countries: "18", speakers: "29", image: "assets/conference-2025.webp", imagePosition: "center", name: { ru: "Доверие как основа успеха", uz: "Ishonch — muvaffaqiyat asosi", en: "Trust as the foundation of success" } },
    2027: { edition: "IV", attendees: "500+", countries: "25", speakers: "40+", image: "assets/conference-2027.webp", imagePosition: "center 48%", name: { ru: "Следующая орбита", uz: "Keyingi orbita", en: "The next orbit" } }
  };

  Object.values(conferences).forEach(({ image }) => {
    const preload = new Image();
    preload.decoding = "async";
    preload.src = image;
  });

  const regions = {
    ru: [
      ["Каракалпакстан", "Экология и возрождение Приаралья"], ["Хорезм", "Знания как актив"], ["Навои", "Инновации в недрах"], ["Бухара", "Устойчивый туризм и ESG"], ["Кашкадарья", "Агро-лидеры 2026"], ["Сурхандарья", "Транзит и торговое партнёрство"], ["Самарканд", "Традиции в цифровой экономике"], ["Джизак", "Автопром и инвестиции"], ["Сырдарья", "Ресурсы и доверие"], ["Ташкент", "BUSINESS HOLISTIC"], ["Ташкентская область", "Энергия индустриального роста"], ["Наманган", "Энергия малого бизнеса"], ["Фергана", "Экосистема доверия"], ["Андижан", "Инклюзивный рост"]
    ],
    uz: [
      ["Qoraqalpog‘iston", "Orolbo‘yi ekologiyasi va tiklanishi"], ["Xorazm", "Bilim — aktiv sifatida"], ["Navoiy", "Yer qa’ridagi innovatsiyalar"], ["Buxoro", "Barqaror turizm va ESG"], ["Qashqadaryo", "Agro yetakchilar 2026"], ["Surxondaryo", "Tranzit va savdo hamkorligi"], ["Samarqand", "Raqamli iqtisodiyotda an’analar"], ["Jizzax", "Avtosanoat va investitsiyalar"], ["Sirdaryo", "Resurslar va ishonch"], ["Toshkent", "BUSINESS HOLISTIC"], ["Toshkent viloyati", "Sanoat o‘sishi energiyasi"], ["Namangan", "Kichik biznes energiyasi"], ["Farg‘ona", "Ishonch ekotizimi"], ["Andijon", "Inklyuziv o‘sish"]
    ],
    en: [
      ["Karakalpakstan", "Ecology and the revival of the Aral Sea region"], ["Khorezm", "Knowledge as an asset"], ["Navoi", "Innovation below ground"], ["Bukhara", "Sustainable tourism and ESG"], ["Kashkadarya", "Agri leaders 2026"], ["Surkhandarya", "Transit and trade partnerships"], ["Samarkand", "Traditions in the digital economy"], ["Jizzakh", "Automotive industry and investment"], ["Syrdarya", "Resources and trust"], ["Tashkent", "BUSINESS HOLISTIC"], ["Tashkent region", "The energy of industrial growth"], ["Namangan", "The energy of small business"], ["Fergana", "An ecosystem of trust"], ["Andijan", "Inclusive growth"]
    ]
  };

  let currentLang = localStorage.getItem("hrbpa-lang") || "ru";
  if (!copy[currentLang]) currentLang = "ru";
  let currentConference = "2025";
  let currentRegion = 9;
  const matrixMapTargets = [];

  const setLanguage = (lang) => {
    currentLang = copy[lang] ? lang : "ru";
    localStorage.setItem("hrbpa-lang", currentLang);
    root.lang = currentLang;
    document.title = currentLang === "uz" ? "HRBPA — O‘zbekiston biznes orbitasi" : currentLang === "en" ? "HRBPA — Uzbekistan's business orbit" : "HRBPA — деловая орбита Узбекистана";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = copy[currentLang][element.dataset.i18n];
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = copy[currentLang][element.dataset.i18nPlaceholder];
      if (value) element.placeholder = value;
    });
    document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("is-active", button.dataset.lang === currentLang));
    renderConference(currentConference, false);
    renderRegions();
  };

  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

  const header = document.querySelector(".site-header");
  const progress = document.querySelector(".scroll-progress");
  let ticking = false;
  const updateScroll = () => {
    const y = window.scrollY;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    header.classList.toggle("is-scrolled", y > 24);
    progress.style.transform = `scaleX(${Math.min(1, y / max)})`;
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, { passive: true });
  updateScroll();

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const headerActions = document.querySelector(".header-actions");
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    headerActions.classList.remove("is-open");
    header.classList.remove("menu-visible");
    body.classList.remove("menu-open");
  };
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    headerActions.classList.toggle("is-open", open);
    header.classList.toggle("menu-visible", open);
    body.classList.toggle("menu-open", open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 }) : null;
  document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    if (revealObserver && !reduceMotion) revealObserver.observe(element);
    else element.classList.add("is-visible");
  });

  const animateCount = (element) => {
    if (element.dataset.counted) return;
    element.dataset.counted = "true";
    const target = Number(element.dataset.count);
    const duration = reduceMotion ? 1 : 1200;
    const start = performance.now();
    const frame = (now) => {
      const progressValue = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progressValue, 3);
      let value = Math.round(target * eased);
      if (element.dataset.group) value = value.toLocaleString(currentLang === "ru" ? "ru-RU" : currentLang === "uz" ? "uz-UZ" : "en-US");
      element.textContent = `${value}${element.dataset.suffix || ""}`;
      if (progressValue < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      }
    }), { threshold: 0.55 });
    document.querySelectorAll("[data-count]").forEach((counter) => counterObserver.observe(counter));
  } else {
    document.querySelectorAll("[data-count]").forEach(animateCount);
  }

  function renderConference(year, animate = true) {
    const item = conferences[year];
    if (!item) return;
    currentConference = year;
    const stage = document.querySelector(".conference-stage");
    if (animate && !reduceMotion) stage.animate([{ opacity: 0.5, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 400, easing: "cubic-bezier(.2,.8,.2,1)" });
    stage.style.setProperty("--conference-image", `url("${item.image}")`);
    stage.style.setProperty("--conference-position", item.imagePosition);
    document.querySelector("#conference-edition").textContent = item.edition;
    document.querySelector("#conference-year").textContent = year;
    document.querySelector("#conference-name").textContent = item.name[currentLang];
    document.querySelector("#conference-attendees").textContent = item.attendees;
    document.querySelector("#conference-countries").textContent = item.countries;
    document.querySelector("#conference-speakers").textContent = item.speakers;
    document.querySelectorAll(".timeline-year").forEach((button) => {
      const active = button.dataset.year === year;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
  }
  document.querySelectorAll(".timeline-year").forEach((button) => button.addEventListener("click", () => renderConference(button.dataset.year)));

  const regionButtons = [...document.querySelectorAll(".region-orbit button")];
  const syncMatrixMap = (index) => {
    matrixMapTargets.forEach(({ element, regionIndex }) => {
      element.classList.toggle("is-active", regionIndex === index);
    });
  };
  function renderRegions() {
    regionButtons.forEach((button, index) => {
      const [name, theme] = regions[currentLang][index];
      button.textContent = name;
      button.dataset.region = name;
      button.dataset.theme = theme;
    });
    selectRegion(currentRegion, false);
  }
  function selectRegion(index, animate = true) {
    currentRegion = index;
    const button = regionButtons[index];
    if (!button) return;
    regionButtons.forEach((item, i) => item.classList.toggle("is-active", i === index));
    document.querySelector("#region-number").textContent = button.dataset.no;
    document.querySelector("#region-name").textContent = button.dataset.region;
    document.querySelector("#region-theme").textContent = button.dataset.theme;
    syncMatrixMap(index);
    const selected = document.querySelector(".matrix-selected");
    if (animate && !reduceMotion) selected.animate([{ opacity: 0.35, transform: "translateX(-8px)" }, { opacity: 1, transform: "translateX(0)" }], { duration: 320, easing: "ease-out" });
  }
  regionButtons.forEach((button, index) => {
    button.addEventListener("click", () => selectRegion(index));
    button.addEventListener("pointerenter", () => selectRegion(index, false));
    button.addEventListener("focus", () => selectRegion(index, false));
  });

  const initMatrixMap = async () => {
    const host = document.querySelector("#matrix-map");
    if (!host) return;

    const response = await fetch("assets/uzbekistan-provinces.svg");
    if (!response.ok) throw new Error("Unable to load the Uzbekistan map");
    const source = await response.text();
    const parsed = new DOMParser().parseFromString(source, "image/svg+xml");
    const svg = parsed.documentElement;
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.setAttribute("viewBox", "0 0 860 564");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.classList.add("matrix-map__svg");
    host.append(svg);

    const regionPathMap = [
      ["pathQaraqalpaqstan", 0], ["pathXorazm", 1], ["pathNavoiy", 2], ["pathBuxoro", 3],
      ["pathQashqadaryo", 4], ["pathSurxondaryo", 5], ["pathSamarqand", 6], ["pathJizzax", 7],
      ["pathGuliston", 8], ["pathToshkent", 10], ["pathNamangan", 11], ["pathFargona", 12], ["pathAndijon", 13]
    ];

    const connectTarget = (element, regionIndex) => {
      if (!element) return;
      element.dataset.regionIndex = String(regionIndex);
      matrixMapTargets.push({ element, regionIndex });
      element.addEventListener("pointerenter", () => selectRegion(regionIndex));
      element.addEventListener("click", () => selectRegion(regionIndex));
    };

    regionPathMap.forEach(([id, index]) => connectTarget(svg.querySelector(`#${id}`), index));

    const marker = document.createElementNS("http://www.w3.org/2000/svg", "g");
    marker.classList.add("matrix-city-marker");
    marker.setAttribute("transform", "translate(668 309)");
    const markerHalo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    markerHalo.setAttribute("r", "14");
    const markerCore = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    markerCore.setAttribute("r", "4");
    marker.append(markerHalo, markerCore);
    svg.append(marker);
    connectTarget(marker, 9);
    syncMatrixMap(currentRegion);
  };
  initMatrixMap().catch(() => {});

  document.querySelectorAll("[data-tier]").forEach((button) => button.addEventListener("click", () => {
    const select = document.querySelector("select[name='interest']");
    select.selectedIndex = 0;
    select.dataset.tier = button.dataset.tier;
    document.querySelector("#contact").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setTimeout(() => document.querySelector("input[name='company']").focus({ preventScroll: true }), reduceMotion ? 0 : 700);
  }));

  const contactForm = document.querySelector("#contact-form");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const tier = contactForm.querySelector("select").dataset.tier;
    const interest = data.get("interest");
    const subject = `HRBPA: ${interest}${tier ? ` · ${tier}` : ""} · ${data.get("company")}`;
    const message = [
      `Company: ${data.get("company")}`,
      `Contact: ${data.get("name")}`,
      `Phone / Telegram: ${data.get("phone")}`,
      `Interest: ${interest}${tier ? ` (${tier})` : ""}`
    ].join("\n");
    contactForm.querySelector(".form-status").textContent = copy[currentLang].formReady;
    window.location.href = `mailto:bilalova@bcguz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  });

  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".magnetic").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
      element.addEventListener("pointerleave", () => { element.style.transform = ""; });
    });

    const magazine = document.querySelector(".magazine-scene");
    magazine.addEventListener("pointermove", (event) => {
      const rect = magazine.getBoundingClientRect();
      const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
      const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
      magazine.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    magazine.addEventListener("pointerleave", () => { magazine.style.transform = ""; });

    const hero = document.querySelector(".hero");
    if (hero) {
      hero.addEventListener("pointermove", (event) => {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
        hero.style.setProperty("--hero-x", `${x}px`);
        hero.style.setProperty("--hero-y", `${y}px`);
      });
      hero.addEventListener("pointerleave", () => {
        hero.style.setProperty("--hero-x", "0px");
        hero.style.setProperty("--hero-y", "0px");
      });
    }
  }

  const createParticleCanvas = (canvas, count, links) => {
    if (!canvas) return;
    const context = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let frameId;
    const pointer = { x: 0, y: 0 };
    let points = [];

    const reset = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      points = Array.from({ length: Math.max(25, Math.round(count * Math.min(1.3, width / 1200))) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.25 + 0.25,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        a: Math.random() * 0.55 + 0.2
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      points.forEach((point, index) => {
        if (!reduceMotion) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < -5) point.x = width + 5;
          if (point.x > width + 5) point.x = -5;
          if (point.y < -5) point.y = height + 5;
          if (point.y > height + 5) point.y = -5;
        }
        const px = point.x + pointer.x * (index % 4) * 0.6;
        const py = point.y + pointer.y * (index % 3) * 0.6;
        context.beginPath();
        context.arc(px, py, point.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(202, 248, 247, ${point.a})`;
        context.fill();
      });

      if (links) {
        const nodes = points.slice(0, 26);
        for (let i = 0; i < nodes.length; i += 1) {
          for (let j = i + 1; j < nodes.length; j += 1) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.hypot(dx, dy);
            if (distance < 125) {
              context.beginPath();
              context.moveTo(nodes[i].x, nodes[i].y);
              context.lineTo(nodes[j].x, nodes[j].y);
              context.strokeStyle = `rgba(101, 220, 228, ${(1 - distance / 125) * 0.13})`;
              context.stroke();
            }
          }
        }
      }
      if (!reduceMotion) frameId = requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * -5;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
    };
    canvas.parentElement.addEventListener("pointermove", onPointerMove, { passive: true });
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(frameId);
      reset();
      draw();
    });
    resizeObserver.observe(canvas.parentElement);
    reset();
    draw();
  };

  const createTrustNetwork = () => {
    const canvas = document.querySelector("#trust-network");
    const section = document.querySelector("#alliance");
    if (!canvas || !section) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const cards = [...section.querySelectorAll("[data-trust-group]")];
    const pointer = { x: 0, y: 0, active: false };
    const hubs = [];
    let nodes = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    let activeGroup = -1;
    let visible = true;

    const random = (() => {
      let seed = 94731;
      return () => {
        seed |= 0;
        seed = seed + 0x6d2b79f5 | 0;
        let value = Math.imul(seed ^ seed >>> 15, 1 | seed);
        value = value + Math.imul(value ^ value >>> 7, 61 | value) ^ value;
        return ((value ^ value >>> 14) >>> 0) / 4294967296;
      };
    })();

    const buildNetwork = () => {
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const hubLayout = width < 720
        ? [[0.18, 0.24], [0.68, 0.19], [0.31, 0.48], [0.79, 0.54]]
        : [[0.16, 0.22], [0.42, 0.37], [0.68, 0.2], [0.84, 0.45]];
      hubs.length = 0;
      hubLayout.forEach(([x, y], group) => hubs.push({ x: x * width, y: y * height, group }));

      const total = width < 720 ? 36 : width < 1100 ? 52 : 72;
      nodes = Array.from({ length: total }, (_, index) => {
        const group = index % 4;
        const hub = hubs[group];
        const angle = random() * Math.PI * 2;
        const radiusX = (0.07 + random() * 0.2) * width;
        const radiusY = (0.045 + random() * 0.15) * height;
        const x = Math.max(12, Math.min(width - 12, hub.x + Math.cos(angle) * radiusX));
        const y = Math.max(12, Math.min(height - 12, hub.y + Math.sin(angle) * radiusY));
        return {
          x,
          y,
          homeX: x,
          homeY: y,
          vx: (random() - 0.5) * 0.09,
          vy: (random() - 0.5) * 0.09,
          size: 0.8 + random() * 1.8,
          phase: random() * Math.PI * 2,
          group
        };
      });
    };

    const cardAnchor = (group) => {
      const card = cards[group];
      if (!card) return { x: width * ((group + 0.5) / 4), y: height * 0.78 };
      const sectionRect = section.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      return {
        x: cardRect.left - sectionRect.left + cardRect.width / 2,
        y: cardRect.top - sectionRect.top + 2
      };
    };

    const drawRoute = (hub, anchor, group) => {
      const highlighted = activeGroup === group;
      context.beginPath();
      context.moveTo(hub.x, hub.y);
      context.bezierCurveTo(hub.x, anchor.y - 90, anchor.x, hub.y + 100, anchor.x, anchor.y);
      context.strokeStyle = highlighted ? "rgba(5, 121, 139, 0.42)" : "rgba(25, 121, 137, 0.08)";
      context.lineWidth = highlighted ? 1.4 : 0.75;
      context.setLineDash(highlighted ? [] : [3, 8]);
      context.stroke();
      context.setLineDash([]);
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);

      hubs.forEach((hub, group) => drawRoute(hub, cardAnchor(group), group));

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (!reduceMotion) {
          const targetX = node.homeX + Math.cos(time * 0.00022 + node.phase) * 10;
          const targetY = node.homeY + Math.sin(time * 0.00018 + node.phase) * 8;
          node.vx += (targetX - node.x) * 0.0007;
          node.vy += (targetY - node.y) * 0.0007;

          if (pointer.active) {
            const dx = node.x - pointer.x;
            const dy = node.y - pointer.y;
            const distance = Math.max(1, Math.hypot(dx, dy));
            if (distance < 170) {
              const force = (1 - distance / 170) * 0.003;
              node.vx += dx / distance * force;
              node.vy += dy / distance * force;
            }
          }
          node.vx *= 0.985;
          node.vy *= 0.985;
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 4 || node.x > width - 4) node.vx *= -1;
          if (node.y < 4 || node.y > height - 4) node.vy *= -1;
          node.x = Math.max(4, Math.min(width - 4, node.x));
          node.y = Math.max(4, Math.min(height - 4, node.y));
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const sameGroup = a.group === b.group;
          const highlighted = activeGroup >= 0 && (a.group === activeGroup || b.group === activeGroup);
          const maxDistance = sameGroup ? 170 : 108;
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > maxDistance) continue;
          const strength = 1 - distance / maxDistance;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = highlighted
            ? `rgba(7, 132, 150, ${0.08 + strength * 0.24})`
            : `rgba(16, 93, 108, ${0.025 + strength * (sameGroup ? 0.105 : 0.04)})`;
          context.lineWidth = highlighted ? 1.05 : 0.7;
          context.stroke();
        }
      }

      if (pointer.active) {
        nodes.forEach((node) => {
          const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
          if (distance > 145) return;
          context.beginPath();
          context.moveTo(pointer.x, pointer.y);
          context.lineTo(node.x, node.y);
          context.strokeStyle = `rgba(101, 220, 228, ${(1 - distance / 145) * 0.25})`;
          context.lineWidth = 0.8;
          context.stroke();
        });
      }

      nodes.forEach((node) => {
        const highlighted = activeGroup === node.group;
        const pulse = reduceMotion ? 1 : 0.88 + Math.sin(time * 0.0013 + node.phase) * 0.12;
        context.beginPath();
        context.arc(node.x, node.y, node.size * pulse + (highlighted ? 0.7 : 0), 0, Math.PI * 2);
        context.fillStyle = highlighted ? "rgba(5, 121, 139, 0.9)" : "rgba(10, 82, 98, 0.44)";
        context.fill();
      });

      hubs.forEach((hub, group) => {
        const highlighted = activeGroup === group;
        const radius = highlighted ? 17 : 11;
        context.beginPath();
        context.arc(hub.x, hub.y, radius, 0, Math.PI * 2);
        context.strokeStyle = highlighted ? "rgba(101, 220, 228, 0.76)" : "rgba(25, 121, 137, 0.2)";
        context.lineWidth = highlighted ? 1.5 : 1;
        context.stroke();
        context.beginPath();
        context.arc(hub.x, hub.y, highlighted ? 4 : 2.5, 0, Math.PI * 2);
        context.fillStyle = highlighted ? "rgba(5, 121, 139, 0.9)" : "rgba(25, 121, 137, 0.45)";
        context.fill();
      });

      if (!reduceMotion && visible) frameId = requestAnimationFrame(draw);
    };

    const setActiveGroup = (group) => {
      activeGroup = group;
      cards.forEach((card, index) => card.classList.toggle("is-network-active", index === group));
      if (reduceMotion) draw();
    };

    section.addEventListener("pointermove", (event) => {
      const rect = section.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    }, { passive: true });
    section.addEventListener("pointerleave", () => {
      pointer.active = false;
      setActiveGroup(-1);
    });
    cards.forEach((card, index) => {
      card.addEventListener("pointerenter", () => setActiveGroup(index));
      card.addEventListener("pointerleave", () => setActiveGroup(-1));
      card.addEventListener("pointerdown", () => setActiveGroup(index), { passive: true });
    });

    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(frameId);
      buildNetwork();
      draw();
    });
    resizeObserver.observe(section);

    if ("IntersectionObserver" in window) {
      const visibilityObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        cancelAnimationFrame(frameId);
        if (visible) draw();
      }, { rootMargin: "120px" });
      visibilityObserver.observe(section);
    }

    buildNetwork();
    draw();
  };

  createParticleCanvas(document.querySelector("#space-canvas"), 105, false);
  createParticleCanvas(document.querySelector("#contact-canvas"), 55, true);
  createTrustNetwork();
  setLanguage(currentLang);
})();
