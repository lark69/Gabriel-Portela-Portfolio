/**
 * PORTFÓLIO — Gabriel Portela
 * ===========================
 * Edite os dados abaixo para personalizar textos, projetos e imagens.
 * Imagens: pasta /images (veja estrutura em cada projeto).
 */

/* ---------- DADOS DOS PROJETOS ---------- */
const PROJECTS = [
  {
    id: "project-1",
    preview: "images/projects/project-1/preview.jpeg",
    title: { pt: "P2 PRIME", en: "P2 PRIME" },
    workType: { pt: "BRANDIG", en: "BRANDIG" },
    category: { pt: "Soluções para mineradoras e industrias.", en: "Mining parts suplier." },
    company: { pt: "P2 PRIME", en: "P2 PRIME" },
    companyDesc: {
      pt: "Empresa fornecedora focada em peças para mineração e soluções industriais. Desenvolvi cards para apresentação da empresa, e para divulgação de alguns produtos, com foco estratégico em tráfego pago.",
      en: "Supplier company focused on mining parts and industrial solutions I developed some cards to introduce the company, and to advertise their products, focused strategically paid traffic.",
    },
    gallery: [
      "images/projects/project-1/carrosel.JPG",
      "images/projects/project-1/carrosel-2.jpg",
      "images/projects/project-1/carrosel-3.jpg",
    ],
  },
  {
    id: "project-2",
    preview: "images/projects/project-2/preview.jpeg",
    title: { pt: "BOTECO DA SUH", en: "BOTECO DA SUH" },
    workType: { pt: "Branding", en: "Branding" },
    category: { pt: "Sports Bar e Restaurant.", en: "Sport Bar & Restaurant." },
    company: { pt: "Boteco da Suh", en: "Boteco da Suh" },
    companyDesc: {
      pt: "Empresa de Alimentação e bebidas. Desenvolvi várias artes com foco na criação do instagram da empresa e em resultados organicos. Desenvolvi também algumas variações de uniformes com foco em esportividade.",
      en: "Food and Beverage company. I created various visuals focused on building the company's Instagram and driving organic results. I also developed several uniform variations with a focus on sportiness.",
    },
    gallery: [
      "images/projects/project-2/carrosel.png",
      "images/projects/project-2/carrosel-2.jpg",
      "images/projects/project-2/carrosel-3.JPG",
    ],
  },
  {
    id: "project-3",
    preview: "images/projects/project-3/preview.jpg",
    title: { pt: "Grand Complication", en: "Grand Complication" },
    workType: { pt: "Branding", en: "Branding" },
    category: { pt: "Curadoria de Rélogios e jóias.", en: "Curatorship of watches and jewelry." },
    company: { pt: "Grand Complication", en: "Grand Complication" },
    companyDesc: {
      pt: "Curadoria de relógios e joias. Criei o logotipo, identidade visual e cards para postagens no Instagram com foco em crescimento orgânico.",
      en: "Curation of watches and jewelry. I created the logo, visual identity, and Instagram post cards focused on organic growth.",
    },
    gallery: [
      "images/projects/project-3/carrossel-2.png",
      "images/projects/project-3/carrossel.jpeg",
    ],
  },
];

/* ---------- TRADUÇÕES ---------- */
const I18N = {
  pt: {
    "lang.choose": "Escolha o idioma",
    "lang.subtitle": "Portfólio profissional",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    "hero.eyebrow": "Design · Branding · UI/UX",
    "hero.bio":
      "Designer com foco em identidade visual, interfaces digitais e experiências memoráveis. Trabalho na interseção entre estratégia de marca e produto, criando soluções claras, funcionais e visualmente refinadas para empresas nacionais e internacionais. Acredito em processos colaborativos, pesquisa com usuários e entregas que comunicam com precisão — do conceito ao pixel final.",
    "hero.cta": "Ver contatos",
    "projects.title": "Projetos selecionados",
    "projects.desc":
      "Uma amostra de trabalhos em design, branding e interface. Clique para ver o case completo.",
    "projects.view": "Ver projeto completo",
    "skills.title": "Habilidades",
    "skills.lead":
      "Combino pensamento estratégico com execução visual de alto nível — do discovery à entrega final.",
    "skills.card1.title": "Identidade & Branding",
    "skills.card1.text":
      "Desenvolvimento de marcas coerentes: naming, logotipo, sistemas visuais, guidelines e aplicações em mídia física e digital.",
    "skills.card2.title": "UI & UX Design",
    "skills.card2.text":
      "Wireframes, protótipos interativos, design systems e interfaces responsivas com foco em usabilidade e conversão.",
    "skills.card3.title": "Direção de arte",
    "skills.card3.text":
      "Campanhas visuais, social media, apresentações institucionais e materiais editoriais com narrativa visual consistente.",
    "skills.card4.title": "Ferramentas",
    "skills.card4.text":
      "Figma, Adobe Creative Suite, prototipagem, handoff para desenvolvimento e colaboração em fluxos ágeis com equipes multidisciplinares.",
    "contact.title": "Contato",
    "contact.desc":
      "Disponível para projetos, freelas e oportunidades em empresas no Brasil e no exterior.",
    "contact.linkedin": "LinkedIn",
    "contact.instagram": "Instagram",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Telefone fixo",
    "project.back": "Voltar",
    "project.home": "Home",
    "project.more": "Mais projetos",
    "projects.viewShort": "Ver",
  },
  en: {
    "lang.choose": "Choose your language",
    "lang.subtitle": "Professional portfolio",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.eyebrow": "Design · Branding · UI/UX",
    "hero.bio":
      "Designer focused on visual identity, digital interfaces, and memorable experiences. I work at the intersection of brand strategy and product, creating clear, functional, and visually refined solutions for national and international companies. I believe in collaborative processes, user research, and deliverables that communicate with precision — from concept to final pixel.",
    "hero.cta": "View contacts",
    "projects.title": "Selected projects",
    "projects.desc":
      "A sample of work in design, branding, and interface. Click to view the full case study.",
    "projects.view": "View full project",
    "skills.title": "Skills",
    "skills.lead":
      "I combine strategic thinking with high-level visual execution — from discovery to final delivery.",
    "skills.card1.title": "Identity & Branding",
    "skills.card1.text":
      "Coherent brand development: naming, logo, visual systems, guidelines, and applications across physical and digital media.",
    "skills.card2.title": "UI & UX Design",
    "skills.card2.text":
      "Wireframes, interactive prototypes, design systems, and responsive interfaces focused on usability and conversion.",
    "skills.card3.title": "Art direction",
    "skills.card3.text":
      "Visual campaigns, social media, institutional presentations, and editorial materials with a consistent visual narrative.",
    "skills.card4.title": "Tools",
    "skills.card4.text":
      "Figma, Adobe Creative Suite, prototyping, dev handoff, and collaboration in agile workflows with multidisciplinary teams.",
    "contact.title": "Contact",
    "contact.desc":
      "Available for projects, freelance work, and opportunities with companies in Brazil and abroad.",
    "contact.linkedin": "LinkedIn",
    "contact.instagram": "Instagram",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Landline",
    "project.back": "Back",
    "project.home": "Home",
    "project.more": "More projects",
    "projects.viewShort": "View",
  },
};

const STORAGE_LANG = "portfolio-lang";
const STORAGE_LANG_SEEN = "portfolio-lang-chosen";

let currentLang = "pt";
let currentProjectId = null;

/* ---------- ELEMENTOS DOM ---------- */
const langOverlay = document.getElementById("lang-overlay");
const pageHome = document.getElementById("page-home");
const pageProject = document.getElementById("page-project");
const projectsGrid = document.getElementById("projects-grid");
const projectMoreGrid = document.getElementById("project-more-grid");

/* ---------- IDIOMA ---------- */
function getLang() {
  return currentLang;
}

function t(key) {
  return I18N[currentLang][key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[currentLang][key]) {
      el.textContent = I18N[currentLang][key];
    }
  });

  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-set-lang") === currentLang);
  });

  renderProjectCards(projectsGrid, PROJECTS, false);
  if (currentProjectId) {
    openProject(currentProjectId, false);
  }
}

function setLanguage(lang, hideOverlay = true) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_LANG, lang);
  localStorage.setItem(STORAGE_LANG_SEEN, "1");
  applyTranslations();
  if (hideOverlay && langOverlay) {
    langOverlay.classList.add("is-hidden");
  }
}

function initLanguage() {
  const saved = localStorage.getItem(STORAGE_LANG);
  const seen = localStorage.getItem(STORAGE_LANG_SEEN);

  if (saved && I18N[saved]) {
    currentLang = saved;
    if (langOverlay) langOverlay.classList.add("is-hidden");
  } else if (seen && saved) {
    currentLang = saved;
    if (langOverlay) langOverlay.classList.add("is-hidden");
  }

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-set-lang"));
    });
  });

  applyTranslations();
}

/* ---------- PROJETOS — cards ---------- */
function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}

function createProjectCard(project, compact = false) {
  const lang = getLang();
  const card = document.createElement("article");
  card.className = `project-card${compact ? " project-card--compact" : ""}`;
  card.dataset.projectId = project.id;

  card.innerHTML = `
    <div class="project-card__thumb">
      <img src="${project.preview}" alt="${project.title[lang]}" loading="lazy">
    </div>
    <div class="project-card__body">
      <span class="project-card__category">${project.workType[lang]}</span>
      <h3 class="project-card__title">${project.title[lang]}</h3>
      <p class="project-card__work">${project.category[lang]}</p>
      <button type="button" class="btn" data-open-project="${project.id}">
        ${compact ? t("projects.viewShort") : t("projects.view")}
      </button>
    </div>
  `;

  card.querySelector("[data-open-project]").addEventListener("click", (e) => {
    e.preventDefault();
    openProject(project.id);
  });

  if (compact) {
    card.querySelector(".project-card__thumb").style.cursor = "pointer";
    card.querySelector(".project-card__thumb").addEventListener("click", () => openProject(project.id));
  }

  return card;
}

function renderProjectCards(container, projects, compact) {
  if (!container) return;
  container.innerHTML = "";
  projects.forEach((p) => {
    container.appendChild(createProjectCard(p, compact));
  });
}

/* ---------- PROJETOS — página completa ---------- */
function openProject(id, scrollTop = true) {
  const project = getProjectById(id);
  if (!project) return;

  currentProjectId = id;
  const lang = getLang();

  document.getElementById("project-category").textContent = project.workType[lang];
  document.getElementById("project-title").textContent = project.title[lang];
  document.getElementById("project-company").textContent = project.company[lang];
  document.getElementById("project-company-desc").textContent = project.companyDesc[lang];

  const gallery = document.getElementById("project-gallery");
  gallery.innerHTML = "";
  project.gallery.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${project.title[lang]} — ${i + 1}`;
    img.loading = i < 2 ? "eager" : "lazy";
    gallery.appendChild(img);
  });

  const others = PROJECTS.filter((p) => p.id !== id).slice(0, 3);
  renderProjectCards(projectMoreGrid, others, true);

  pageHome.hidden = true;
  pageProject.hidden = false;
  document.body.classList.add("is-project-view");

  if (scrollTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goHome() {
  currentProjectId = null;
  pageProject.hidden = true;
  pageHome.hidden = false;
  document.body.classList.remove("is-project-view");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- NAVEGAÇÃO ---------- */
function initNavigation() {
  document.querySelectorAll(".site-header__nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (!document.body.classList.contains("is-project-view")) return;
      e.preventDefault();
      const hash = link.getAttribute("href");
      goHome();
      if (hash && hash.startsWith("#")) {
        setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 150);
      }
    });
  });

  document.querySelectorAll("[data-nav-home]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
      }
      goHome();
      const hash = el.getAttribute("href");
      if (hash && hash !== "#hero") {
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    });
  });
}

/* ---------- INICIALIZAÇÃO ---------- */
function init() {
  document.getElementById("year").textContent = new Date().getFullYear();
  initLanguage();
  initNavigation();
  renderProjectCards(projectsGrid, PROJECTS, false);
}

document.addEventListener("DOMContentLoaded", init);
