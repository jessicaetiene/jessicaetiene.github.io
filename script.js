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

let idiomaAtual = localStorage.getItem("idioma") || "pt";

function aplicarTemaSalvo() { const temaSalvo = localStorage.getItem("tema"); document.body.classList.toggle("dark", temaSalvo === "dark"); atualizarTextoBotaoTema(); }
function alternarTema() { const agoraDark = document.body.classList.toggle("dark"); localStorage.setItem("tema", agoraDark ? "dark" : "light"); atualizarTextoBotaoTema(); }
function atualizarTextoBotaoTema() { const b = document.getElementById("themeToggle"); if (!b) return; const t = idiomas[idiomaAtual]; if (b.classList.contains("theme-toggle-switch")) { b.setAttribute("aria-label", document.body.classList.contains("dark") ? t.themeLight : t.themeDark); b.setAttribute("aria-pressed", String(document.body.classList.contains("dark"))); return; } b.textContent = document.body.classList.contains("dark") ? t.themeLight : t.themeDark; }
function configurarBotaoTema() { const b = document.getElementById("themeToggle"); if (b) b.addEventListener("click", alternarTema); }


function aplicarIdiomaProjeto() {
  const projectId = document.body.dataset.projectId;
  if (projectId !== "kafka-lab") return;
  const t = idiomas[idiomaAtual];
  const backBtn = document.querySelector(".top-actions .btn");
  if (backBtn) backBtn.textContent = t.back;
  const repoLabel = document.getElementById("repoLabel");
  if (repoLabel) repoLabel.textContent = t.repoLabel;
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

  const sideDescription = document.getElementById("kafka-side-description");
  if (sideDescription) sideDescription.textContent = projetoDescricaoPorIdioma(t);

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
  return t.kafkaStudyText;
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
  aplicarIdiomaProjeto();
}

function renderizarProjetos() {
  const t = idiomas[idiomaAtual];
  const listaProjetos = document.getElementById("listaProjetos");
  listaProjetos.innerHTML = "";
  dadosSite.projetos.forEach((projeto) => {
    const card = document.createElement("a");
    card.className = "project";
    card.href = `projects/${projeto.id}.html`;
    card.innerHTML = `<h3>${projeto.nome}</h3><p>${projeto.descricao}</p><small>${t.openProject}</small>`;
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

  const projeto = dadosSite.projetos.find((item) => item.id === projectId);
  if (!projeto) return;

  const titulo = document.getElementById("tituloProjeto");
  const descricao = document.getElementById("descricaoProjeto");
  const link = document.getElementById("linkProjeto");

  if (titulo) titulo.textContent = projeto.nome;
  if (descricao) descricao.textContent = projeto.descricao;
  if (link) link.href = projeto.link;
}

function iniciar() {
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
