const dadosSite = {
  nome: "Jessica Etiene",
  assinatura: "Jessica Etiene",
  bio: "Desenvolvedora focada em criar experiências web modernas, funcionais e acessíveis.",
  sobre: "Este site é dinâmico: os projetos e informações de contato são montados via JavaScript, facilitando a atualização sem mexer no HTML.",
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
    { label: "GitHub", valor: "https://github.com/jessicaetiene" },
    { label: "LinkedIn", valor: "https://linkedin.com/in/jessicaetiene" },
    { label: "Email", valor: "jessica@email.com" }
  ]
};

function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema");
  const usarDark = temaSalvo ? temaSalvo === "dark" : true;
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
  const darkAtivo = document.body.classList.contains("dark");
  botao.textContent = darkAtivo ? "☀️ Light" : "🌙 Dark";
}

function configurarBotaoTema() {
  const botao = document.getElementById("themeToggle");
  if (!botao) return;
  botao.addEventListener("click", alternarTema);
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

  const badgesTecnologias = document.getElementById("badgesTecnologias");
  dadosSite.tecnologias.forEach((tecnologia) => {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = tecnologia;
    badgesTecnologias.appendChild(badge);
  });

  const listaProjetos = document.getElementById("listaProjetos");
  dadosSite.projetos.forEach((projeto) => {
    const artigo = document.createElement("a");
    artigo.className = "project";
    artigo.href = `project.html?id=${encodeURIComponent(projeto.id)}`;
    artigo.innerHTML = `
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
      <small>Clique para abrir os detalhes</small>
    `;

    listaProjetos.appendChild(artigo);
  });

  const contatos = document.getElementById("contatos");
  dadosSite.contatos.forEach((contato) => {
    const item = document.createElement("li");
    item.textContent = `${contato.label}: ${contato.valor}`;
    contatos.appendChild(item);
  });
}

function renderizarPaginaProjeto() {
  const params = new URLSearchParams(window.location.search);
  const idProjeto = params.get("id");
  const projeto = dadosSite.projetos.find((item) => item.id === idProjeto);

  const titulo = document.getElementById("tituloProjeto");
  const descricao = document.getElementById("descricaoProjeto");
  const link = document.getElementById("linkProjeto");

  if (!projeto) {
    titulo.textContent = "Projeto não encontrado";
    descricao.textContent = "Verifique o link e tente novamente.";
    link.style.display = "none";
    return;
  }

  titulo.textContent = projeto.nome;
  descricao.textContent = projeto.descricao;
  link.href = projeto.link;
}

function iniciar() {
  aplicarTemaSalvo();
  configurarBotaoTema();

  if (document.getElementById("listaProjetos")) {
    renderizarIndex();
  }

  if (document.getElementById("tituloProjeto")) {
    renderizarPaginaProjeto();
  }
}

iniciar();
