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
    {
      nome: "Projeto 1",
      descricao: "Landing page responsiva com HTML, CSS e JavaScript.",
      link: "https://github.com/jessicaetiene/projeto-1"
    },
    {
      nome: "Projeto 2",
      descricao: "Aplicação web com integração de API externa.",
      link: "https://github.com/jessicaetiene/projeto-2"
    },
    {
      nome: "Projeto 3",
      descricao: "Dashboard de métricas com visualizações interativas.",
      link: "https://github.com/jessicaetiene/projeto-3"
    }
  ],
  contatos: [
    { label: "GitHub", valor: "https://github.com/jessicaetiene" },
    { label: "LinkedIn", valor: "https://linkedin.com/in/jessicaetiene" },
    { label: "Email", valor: "jessica@email.com" }
  ]
};

function mostrarDetalhesProjeto(projeto) {
  document.getElementById("tituloDetalheProjeto").textContent = projeto.nome;
  document.getElementById("descricaoDetalheProjeto").textContent = projeto.descricao;
  document.getElementById("linkDetalheProjeto").href = projeto.link;

  const secaoDetalhes = document.getElementById("detalheProjeto");
  secaoDetalhes.classList.remove("hidden");
  secaoDetalhes.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderizar() {
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
    const artigo = document.createElement("article");
    artigo.className = "project";
    artigo.tabIndex = 0;
    artigo.innerHTML = `
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
      <small>Clique para ver detalhes</small>
    `;

    artigo.addEventListener("click", () => mostrarDetalhesProjeto(projeto));
    artigo.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        mostrarDetalhesProjeto(projeto);
      }
    });

    listaProjetos.appendChild(artigo);
  });

  const contatos = document.getElementById("contatos");
  dadosSite.contatos.forEach((contato) => {
    const item = document.createElement("li");
    item.textContent = `${contato.label}: ${contato.valor}`;
    contatos.appendChild(item);
  });
}

renderizar();
