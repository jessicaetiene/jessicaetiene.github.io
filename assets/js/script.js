const idiomas = {
  pt: {
    lang: "pt-BR",
    title: "Portfólio | Jéssica Etiene",
    role: "💻 Engenheira de Software",
    contato: "Contato",
    tecnologias: "Tecnologias",
    navSobre: "Sobre",
    navPortfolio: "Portfólio",
    themeLight: "☀️ Claro",
    themeDark: "🌙 Escuro",
    aboutTitle: "Sobre mim",
    quemSouLabel: "Quem sou",
    ondeTrabalhoLabel: "Onde trabalho",
    projetosTitle: "Projetos",
    projetosHint: "Clique em um projeto para acessar os detalhes",
    openProject: "Abrir página do projeto",
    back: "← Voltar",
    repoLabel: "Abrir repositório no GitHub",
    kafkaStudyTitle: "O que estou estudando neste laboratório",
    kafkaStudyText: "Este projeto funciona como um laboratório prático para registrar meus estudos sobre Apache Kafka e consolidar fundamentos de mensageria orientada a eventos.",
    kafkaContentsTitle: "Conteúdos do laboratório",
    kafkaTopics: [
      { title: "Criação de tópicos", text: "Aprenda a criar e configurar tópicos no Kafka." },
      { title: "Criação e evolução de schemas Avro", text: "Entenda como definir e evoluir schemas com Avro." },
      { title: "Envio de mensagens para tópicos (producers)", text: "Publique mensagens em tópicos do Kafka." },
      { title: "Consumo de mensagens (consumers)", text: "Consuma mensagens de tópicos de forma eficiente." },
      { title: "Uso de Docker para subir um cluster Kafka local", text: "Suba um ambiente completo do Kafka com Docker." }
    ],
    kafkaNav: { home: "Início", topics: "Tópicos", partitions: "Partições", producers: "Producers", consumers: "Consumers", schema: "Schema Registry", docker: "Kafka com Docker" },
    kafkaLinks: ["Kafka Topics", "Partições", "Producers", "Consumers", "Avro e Schema Registry", "Kafka com Docker"],
    bio: "Engenheira de software focada em construir sistemas backend escaláveis, resilientes e orientados a dados.",
    sobre: "Desenvolvo soluções com foco em qualidade, performance e boas práticas, transformando requisitos complexos em produtos confiáveis e de alto impacto.",
    quemSou: "Sou uma desenvolvedora backend apaixonada por arquitetura de sistemas, microsserviços e engenharia de dados. Tenho experiência em projetar e implementar soluções em ambientes cloud (especialmente AWS), além de atuar na produção e integração de modelos de machine learning.",
    ondeTrabalho: "Atualmente trabalho na Empresa X como Desenvolvedora Front-end.",
  },
  en: {
    lang: "en-US",
    title: "Portfolio | Jéssica Etiene",
    role: "💻 Software Engineer",
    contato: "Contact",
    tecnologias: "Technologies",
    navSobre: "About",
    navPortfolio: "Portfolio",
    themeLight: "☀️ Light",
    themeDark: "🌙 Dark",
    aboutTitle: "About me",
    quemSouLabel: "Who I am",
    ondeTrabalhoLabel: "Where I work",
    projetosTitle: "Projects",
    projetosHint: "Click a project to access its details.",
    openProject: "Open project page",
    back: "← Back",
    repoLabel: "Open repository on GitHub",
    kafkaStudyTitle: "What I am studying in this lab",
    kafkaStudyText: "This project works as a hands-on lab to track my Apache Kafka studies and consolidate event-driven messaging fundamentals.",
    kafkaContentsTitle: "Lab contents",
    kafkaTopics: [
      { title: "Topic creation", text: "Learn to create and configure Kafka topics." },
      { title: "Avro schema creation and evolution", text: "Understand how to define and evolve schemas with Avro." },
      { title: "Sending messages to topics (producers)", text: "Publish messages to Kafka topics." },
      { title: "Consuming messages", text: "Consume topic messages efficiently." },
      { title: "Using Docker to run a local Kafka cluster", text: "Start a complete Kafka environment with Docker." }
    ],
    kafkaNav: { home: "Home", topics: "Topics", partitions: "Partitions", producers: "Producers", consumers: "Consumers", schema: "Schema Registry", docker: "Kafka with Docker" },
    kafkaLinks: ["Kafka Topics", "Partitions", "Producers", "Consumers", "Avro and Schema Registry", "Kafka with Docker"],
    bio: "Software engineer focused on building scalable, resilient, and data-driven backend systems.",
    sobre: "I design and develop solutions with a strong emphasis on quality, performance, and best practices, turning complex requirements into reliable, high-impact products.",
    quemSou: "I am a backend developer passionate about system architecture, microservices, and data engineering. I have experience designing and implementing cloud-based solutions (especially on AWS), as well as deploying and integrating machine learning models into production environments.",
    ondeTrabalho: "I currently work at Company X as a Front-end Developer.",
  }
};

const dadosSite = {
  nome: "Jéssica Etiene",
  assinatura: "Jéssica Etiene",
  fotoPerfil: "./resources/images/profile.jpeg",
  tecnologias: [
    "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
    "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    "https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white",
    "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white",
    "https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white",
    "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
    "https://img.shields.io/badge/Clojure-5881D8?style=for-the-badge&logo=clojure&logoColor=white"
  ],
  projetos: [
    { id: "catalog-pricing-service", nome: "Catalog Pricing Service", descricao: "Mini projeto de API em Kotlin", link: "https://github.com/jessicaetiene/catalog-pricing-service" },
    { id: "kafka-lab", nome: "Kafka Lab", descricao: "Laboratório para aprender e praticar conceitos do Apache Kafka.", link: "https://github.com/jessicaetiene/kafka-lab" },
    // { id: "projeto-3", nome: "Projeto 3", descricao: "Dashboard de métricas com visualizações interativas.", link: "https://github.com/jessicaetiene/projeto-3" },
    // { id: "projeto-4", nome: "Projeto 4", descricao: "Sistema de autenticação com fluxo de recuperação de senha.", link: "https://github.com/jessicaetiene/projeto-4" },
    // { id: "projeto-5", nome: "Projeto 5", descricao: "E-commerce com carrinho e simulação de pagamento.", link: "https://github.com/jessicaetiene/projeto-5" },
    // { id: "projeto-6", nome: "Projeto 6", descricao: "Aplicativo de tarefas com filtros e persistência local.", link: "https://github.com/jessicaetiene/projeto-6" }
  ],
  contatos: [
    { icon: "🐙", label: "GitHub", valor: "github.com/jessicaetiene", href: "https://github.com/jessicaetiene" },
    { icon: "✉️", label: "Gmail", valor: "jessica@gmail.com", href: "mailto:jessica@gmail.com" },
    { icon: "💼", label: "LinkedIn", valor: "linkedin.com/in/jessicaetiene", href: "https://linkedin.com/in/jessicaetiene" }
  ]
};

const descricoesProjetos = {};

function basePath() {
  return window.location.pathname.includes("/projects/") ? ".." : ".";
}

async function carregarDescricoesProjeto() {
  const projetosIds = dadosSite.projetos.map((projeto) => projeto.id);
  const idiomasDisponiveis = ["pt", "en"];
  await Promise.all(
    projetosIds.flatMap((projectId) =>
      idiomasDisponiveis.map(async (idioma) => {
        try {
          const resposta = await fetch(`${basePath()}/assets/data/descriptions/${projectId}/${idioma}.json`);
          if (!resposta.ok) return;
          const dados = await resposta.json();
          if (!descricoesProjetos[projectId]) descricoesProjetos[projectId] = {};
          descricoesProjetos[projectId][idioma] = dados;
        } catch (_) {}
      })
    )
  );
}

function dadosProjetoTraduzidos(projectId) {
  const projeto = dadosSite.projetos.find((item) => item.id === projectId);
  if (!projeto) return null;
  const traducao = descricoesProjetos[projectId]?.[idiomaAtual];
  return {
    ...projeto,
    nome: traducao?.name || projeto.nome,
    descricao: traducao?.description || projeto.descricao
  };
}


const projectTemplates = {
  default: {
    nav: ["🏠 Início", "📌 Visão geral", "🧱 Arquitetura", "⚙️ Stack", "🚀 Próximos passos"],
    sideTitle: "Projeto",
    sideDescription: "Template reutilizável para páginas de projeto.",
    sideImage: null
  },
  "kafka-lab": {
    nav: ["🏠 Início", "📖 Tópicos", "🧩 Partições", "📨 Producers", "👥 Consumers", "🛡️ Schema Registry", "🐳 Kafka com Docker"],
    sideTitle: "Kafka Lab",
    sideDescription: "Laboratório para estudar fundamentos de mensageria orientada a eventos com Apache Kafka.",
    sideImage: "../resources/images/kafka-logo-dark.svg"
  },
  "catalog-pricing-service": {
    nav: ["🏠 Início", "📌 Objetivo", "🧠 Regras de preço", "🧪 Testes", "📦 Deploy"],
    sideTitle: "Catalog Pricing Service",
    sideDescription: "Mini API em Kotlin para simular cálculo de preços de catálogo.",
    sideImage: null
  }
};

const projectTranslations = {
  "kafka-lab": {
    navIds: ["kafka-nav-home", "kafka-nav-topics", "kafka-nav-partitions", "kafka-nav-producers", "kafka-nav-consumers", "kafka-nav-schema", "kafka-nav-docker"],
    navLabels: (t) => [t.kafkaNav.home, t.kafkaNav.topics, t.kafkaNav.partitions, t.kafkaNav.producers, t.kafkaNav.consumers, t.kafkaNav.schema, t.kafkaNav.docker],
    sideTitle: { pt: "Kafka Lab", en: "Kafka Lab" },
    sideDescription: (t) => t.kafkaStudyText
  },
  "catalog-pricing-service": {
    navIds: ["catalog-nav-home", "catalog-nav-goal", "catalog-nav-rules", "catalog-nav-tests", "catalog-nav-deploy"],
    navLabels: (t) => [t.kafkaNav.home, idiomaAtual === "pt" ? "Objetivo" : "Goal", idiomaAtual === "pt" ? "Regras de preço" : "Pricing rules", idiomaAtual === "pt" ? "Testes" : "Tests", idiomaAtual === "pt" ? "Deploy" : "Deploy"],
    sideTitle: { pt: "Catalog Pricing Service", en: "Catalog Pricing Service" },
    sideDescription: (t) => descricoesProjetos["catalog-pricing-service"]?.[idiomaAtual]?.description || (idiomaAtual === "pt" ? "Mini API em Kotlin para simular cálculo de preços de catálogo." : "Kotlin mini API to simulate catalog pricing calculations.")
  }
};

function renderProjectTemplate() {
  const projectId = document.body.dataset.projectId;
  const root = document.getElementById('projectRoot');
  if (!projectId || !root) return;
  const cfg = projectTemplates[projectId] || projectTemplates.default;
  const navIds = projectTranslations[projectId]?.navIds || [];
  const navItems = cfg.nav.map((item, idx) => {
    const idAttr = navIds[idx] ? ` id="${navIds[idx]}"` : "";
    const tag = idx === 0 ? `a href="../index.html" class="project-nav-item active"${idAttr}` : `div class="project-nav-item"${idAttr}`;
    return `<${tag}>${item}</${idx===0?'a':'div'}>`;
  }).join('');
  const sideImage = cfg.sideImage ? `<img src="${cfg.sideImage}" alt="Logo do projeto" class="project-side-image" />` : '';
  root.innerHTML = `
    <aside class="project-sidebar">
      ${navItems}
      <section class="project-side-card">
        <h3 id="project-side-title">${cfg.sideTitle}</h3>
        <p id="project-side-description">${cfg.sideDescription}</p>
        ${sideImage}
      </section>
    </aside>
    <section class="project-content">
      <div class="top-actions">
        <a href="../index.html" class="btn">← Voltar</a>
        <div class="top-actions-right">
          <button class="lang-btn" data-lang="pt" type="button" aria-label="Português"><img src="https://flagcdn.com/w20/br.png" alt="" aria-hidden="true"></button>
          <button class="lang-btn" data-lang="en" type="button" aria-label="English"><img src="https://flagcdn.com/w20/us.png" alt="" aria-hidden="true"></button>
          <button id="themeToggle" class="theme-toggle theme-toggle-switch" type="button" aria-label="Alternar tema" aria-pressed="false">
            <span class="toggle-track" aria-hidden="true"><span class="toggle-icon toggle-icon-sun">☀️</span><span class="toggle-thumb"></span><span class="toggle-icon toggle-icon-moon">🌙</span></span>
          </button>
        </div>
      </div>
      <div class="project-page-header"><div>
        <h1 id="tituloProjeto"></h1>
        <p id="descricaoProjeto"></p>
        <a id="linkProjeto" class="repo-link" href="#" target="_blank" rel="noopener noreferrer"><span id="repoLabel">Abrir repositório no GitHub</span></a>
      </div></div>
      <section class="kafka-highlight" aria-labelledby="kafka-lab-topicos"><h2 id="kafka-lab-topicos"></h2><p id="kafka-lab-texto"></p></section>
      <ul id="kafkaTopicos" class="study-list cards"></ul>
    </section>`;
}

let idiomaAtual = localStorage.getItem("idioma") || "pt";

function aplicarTemaSalvo() { const temaSalvo = localStorage.getItem("tema"); document.body.classList.toggle("dark", temaSalvo === "dark"); atualizarTextoBotaoTema(); }
function alternarTema() { const agoraDark = document.body.classList.toggle("dark"); localStorage.setItem("tema", agoraDark ? "dark" : "light"); atualizarTextoBotaoTema(); }
function atualizarTextoBotaoTema() { const b = document.getElementById("themeToggle"); if (!b) return; const t = idiomas[idiomaAtual]; if (b.classList.contains("theme-toggle-switch")) { b.setAttribute("aria-label", document.body.classList.contains("dark") ? t.themeLight : t.themeDark); b.setAttribute("aria-pressed", String(document.body.classList.contains("dark"))); return; } b.textContent = document.body.classList.contains("dark") ? t.themeLight : t.themeDark; }
function configurarBotaoTema() { const b = document.getElementById("themeToggle"); if (b) b.addEventListener("click", alternarTema); }


function aplicarIdiomaProjeto() {
  const projectId = document.body.dataset.projectId;
  const t = idiomas[idiomaAtual];
  const backBtn = document.querySelector(".top-actions .btn");
  if (backBtn) backBtn.textContent = t.back;
  const repoLabel = document.getElementById("repoLabel");
  if (repoLabel) repoLabel.textContent = t.repoLabel;
  const sideDescription = document.getElementById("project-side-description");
  if (sideDescription) sideDescription.textContent = descricoesProjetos[projectId]?.[idiomaAtual]?.sideDescription || projetoDescricaoPorIdioma(t);
  const sideTitle = document.getElementById("project-side-title");
  if (sideTitle) {
    const translated = projectTranslations[projectId]?.sideTitle?.[idiomaAtual];
    if (translated) sideTitle.textContent = translated;
  }
  const navLabels = projectTranslations[projectId]?.navLabels?.(t);
  const navIds = projectTranslations[projectId]?.navIds || [];
  navIds.forEach((id, index) => {
    const el = document.getElementById(id);
    if (el && navLabels?.[index]) {
      const prefix = index === 0 ? "🏠 " : "";
      el.textContent = `${prefix}${navLabels[index]}`;
    }
  });
  if (projectId !== "kafka-lab") return;
  const studyTitle = document.getElementById("kafka-lab-topicos");
  if (studyTitle) studyTitle.textContent = t.kafkaStudyTitle;
  const studyText = document.getElementById("kafka-lab-texto");
  if (studyText) studyText.textContent = t.kafkaStudyText;
  const contentsTitle = document.getElementById("kafka-lab-conteudos");
  if (contentsTitle) contentsTitle.textContent = t.kafkaContentsTitle;
  const navMap = {
    "kafka-nav-home": t.kafkaNav.home,
    "kafka-nav-topics": t.kafkaNav.topics,
    "kafka-nav-partitions": t.kafkaNav.partitions,
    "kafka-nav-producers": t.kafkaNav.producers,
    "kafka-nav-consumers": t.kafkaNav.consumers,
    "kafka-nav-schema": t.kafkaNav.schema,
    "kafka-nav-docker": t.kafkaNav.docker
  };
  Object.entries(navMap).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });

  const topics = document.getElementById("kafkaTopicos");
  if (topics) {
    topics.innerHTML = "";
    t.kafkaTopics.forEach((topic) => {
      const item = document.createElement("li");
      item.innerHTML = `<h3>${topic.title}</h3><p>${topic.text}</p>`;
      topics.appendChild(item);
    });
  }

  const links = document.getElementById("kafkaLinks");
  if (links) {
    const hrefs = ["./topics.md", "./partitions.md", "./producers.md", "./consumers.md", "./avro.md", "./docker.md"];
    links.innerHTML = "";
    t.kafkaLinks.forEach((label, index) => {
      const link = document.createElement("a");
      link.href = hrefs[index];
      link.textContent = `→ ${label}`;
      links.appendChild(link);
    });
  }
}

function projetoDescricaoPorIdioma(t) {
  const projectId = document.body.dataset.projectId;
  if (projectId === "kafka-lab") return descricoesProjetos[projectId]?.[idiomaAtual]?.sideDescription || t.kafkaStudyText;
  return projectTranslations[projectId]?.sideDescription?.(t) || "";
}

function setIdioma(idioma) {
  idiomaAtual = idioma;
  localStorage.setItem("idioma", idiomaAtual);
  const t = idiomas[idiomaAtual];
  document.documentElement.lang = t.lang;
  document.title = t.title;
  if (document.getElementById("listaProjetos")) {
    document.querySelector(".role").textContent = t.role;
    document.querySelector("#sobre h2").textContent = t.aboutTitle;
    document.querySelector("#projetos h2").textContent = t.projetosTitle;
    document.getElementById("projetosHint").textContent = t.projetosHint;
    document.getElementById("contatoTitulo").textContent = t.contato;
    document.getElementById("tecnologiasTitulo").textContent = t.tecnologias;
    document.getElementById("navSobre").textContent = t.navSobre;
    document.getElementById("navPortfolio").textContent = t.navPortfolio;
    document.getElementById("quemSouLabel").textContent = `${t.quemSouLabel}:`;
    document.getElementById("ondeTrabalhoLabel").textContent = `${t.ondeTrabalhoLabel}:`;
    document.getElementById("bio").textContent = t.bio;
    document.getElementById("sobreTexto").textContent = t.sobre;
    document.getElementById("quemSou").textContent = t.quemSou;
    document.getElementById("ondeTrabalho").textContent = t.ondeTrabalho;
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === idiomaAtual));
  atualizarTextoBotaoTema();
  renderizarProjetos();
  renderizarPaginaProjeto();
  aplicarIdiomaProjeto();
}

function renderizarProjetos() {
  const t = idiomas[idiomaAtual];
  const listaProjetos = document.getElementById("listaProjetos");
  if (!listaProjetos) return;
  listaProjetos.innerHTML = "";
  dadosSite.projetos.forEach((projeto) => {
    const projetoTraduzido = dadosProjetoTraduzidos(projeto.id);
    const card = document.createElement("a");
    card.className = "project";
    card.href = `projects/${projeto.id}.html`;
    card.innerHTML = `<h3>${projetoTraduzido.nome}</h3><p>${projetoTraduzido.descricao}</p><small>${t.openProject}</small>`;
    listaProjetos.appendChild(card);
  });
}

function renderizarIndex() {
  document.getElementById("nome").textContent = dadosSite.nome;
  document.getElementById("assinatura").textContent = dadosSite.assinatura;
  document.getElementById("fotoPerfil").src = dadosSite.fotoPerfil;
  document.getElementById("ano").textContent = new Date().getFullYear();

  const badges = document.getElementById("badgesTecnologias");
  dadosSite.tecnologias.forEach((src) => {
    const img = document.createElement("img");
    img.className = "tech-badge";
    img.src = src;
    img.alt = "Tecnologia";
    badges.appendChild(img);
  });

  const contatos = document.getElementById("contatos");
  dadosSite.contatos.forEach((contato) => {
    const item = document.createElement("li");
    item.innerHTML = `<a href="${contato.href}" target="_blank" rel="noopener noreferrer"><span>${contato.icon}</span> ${contato.label}</a>`;
    contatos.appendChild(item);
  });

  setIdioma(idiomaAtual);
}

function configurarIdioma() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setIdioma(btn.dataset.lang));
  });
}


function renderizarPaginaProjeto() {
  const projectId = document.body.dataset.projectId;
  if (!projectId) return;

  const projeto = dadosProjetoTraduzidos(projectId);
  if (!projeto) return;

  const titulo = document.getElementById("tituloProjeto");
  const descricao = document.getElementById("descricaoProjeto");
  const link = document.getElementById("linkProjeto");

  if (titulo) titulo.textContent = projeto.nome;
  if (descricao) descricao.textContent = projeto.descricao;
  if (link) link.href = projeto.link;
}

async function iniciar() {
  await carregarDescricoesProjeto();
  renderProjectTemplate();
  aplicarTemaSalvo();
  configurarBotaoTema();
  configurarIdioma();
  if (document.getElementById("listaProjetos")) {
    renderizarIndex();
  }
  renderizarPaginaProjeto();
  aplicarIdiomaProjeto();
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === idiomaAtual));
}

iniciar();
