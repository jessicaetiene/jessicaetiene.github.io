const dadosSite = {
  nome: "Jessica Etiene",
  assinatura: "Jessica Etiene",
  bio: "Desenvolvedora focada em criar experiências web modernas, funcionais e acessíveis.",
  sobre: "Crio interfaces com foco em clareza, estética e facilidade de uso para transformar ideias em produtos digitais memoráveis.",
  quemSou: "Sou uma desenvolvedora front-end apaixonada por interfaces limpas, performance e boas práticas de código.",
  ondeTrabalho: "Atualmente trabalho na Empresa X como Desenvolvedora Front-end.",
  fotoPerfil: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  tecnologias: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Git", "Figma"],
  projetos: [
    { id: "projeto-1", nome: "Projeto 1", descricao: "Landing page responsiva com HTML, CSS e JavaScript.", link: "https://github.com/jessicaetiene/projeto-1" },
    { id: "projeto-2", nome: "Projeto 2", descricao: "Aplicação web com integração de API externa.", link: "https://github.com/jessicaetiene/projeto-2" },
    { id: "projeto-3", nome: "Projeto 3", descricao: "Dashboard de métricas com visualizações interativas.", link: "https://github.com/jessicaetiene/projeto-3" },
    { id: "projeto-4", nome: "Projeto 4", descricao: "Sistema de autenticação com fluxo de recuperação de senha.", link: "https://github.com/jessicaetiene/projeto-4" },
    { id: "projeto-5", nome: "Projeto 5", descricao: "E-commerce com carrinho e simulação de pagamento.", link: "https://github.com/jessicaetiene/projeto-5" },
    { id: "projeto-6", nome: "Projeto 6", descricao: "Aplicativo de tarefas com filtros e persistência local.", link: "https://github.com/jessicaetiene/projeto-6" }
  ],
  contatos: [
    { label: "GitHub", valor: "github.com/jessicaetiene" },
    { label: "LinkedIn", valor: "linkedin.com/in/jessicaetiene" },
    { label: "Email", valor: "jessica@email.com" }
  ]
};

function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema");
  const usarDark = temaSalvo ? temaSalvo === "dark" : false;
  document.body.classList.toggle("dark", usarDark);
  atualizarTextoBotaoTema();
}

function alternarTema() {
  const agoraDark = document.body.classList.toggle("dark");
  localStorage.setItem("tema", agoraDark ? "dark" : "light");
  atualizarTextoBotaoTema();
}

function atualizarTextoBotaoTema() {
  const botao = document.getElementById("themeToggle");
  if (!botao) return;
  botao.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
}

function configurarBotaoTema() {
  const botao = document.getElementById("themeToggle");
  if (botao) botao.addEventListener("click", alternarTema);
}

function renderizarIndex() {
  document.getElementById("nome").textContent = dadosSite.nome;
  document.getElementById("assinatura").textContent = dadosSite.assinatura;
  document.getElementById("bio").textContent = dadosSite.bio;
  document.getElementById("sobreTexto").textContent = dadosSite.sobre;
  document.getElementById("quemSou").textContent = dadosSite.quemSou;
  document.getElementById("ondeTrabalho").textContent = dadosSite.ondeTrabalho;
  document.getElementById("fotoPerfil").src = dadosSite.fotoPerfil;
  document.getElementById("ano").textContent = new Date().getFullYear();

  const badges = document.getElementById("badgesTecnologias");
  dadosSite.tecnologias.forEach((tecnologia) => {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = tecnologia;
    badges.appendChild(badge);
  });

  const listaProjetos = document.getElementById("listaProjetos");
  dadosSite.projetos.forEach((projeto) => {
    const card = document.createElement("a");
    card.className = "project";
    card.href = `${projeto.id}.html`;
    card.innerHTML = `<h3>${projeto.nome}</h3><p>${projeto.descricao}</p><small>Abrir página do projeto</small>`;
    listaProjetos.appendChild(card);
  });

  const contatos = document.getElementById("contatos");
  dadosSite.contatos.forEach((contato) => {
    const item = document.createElement("li");
    item.textContent = `${contato.label}: ${contato.valor}`;
    contatos.appendChild(item);
  });
}

function renderizarPaginaProjeto() {
  const id = document.body.dataset.projectId;
  if (!id) return;
  const projeto = dadosSite.projetos.find((item) => item.id === id);
  if (!projeto) return;

  document.getElementById("tituloProjeto").textContent = projeto.nome;
  document.getElementById("descricaoProjeto").textContent = projeto.descricao;
  document.getElementById("linkProjeto").href = projeto.link;
}

function iniciar() {
  aplicarTemaSalvo();
  configurarBotaoTema();
  if (document.getElementById("listaProjetos")) renderizarIndex();
  if (document.getElementById("tituloProjeto")) renderizarPaginaProjeto();
}

iniciar();
