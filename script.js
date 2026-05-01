const dadosSite = {
  nome: "Jessica Etiene",
  assinatura: "Jessica Etiene",
  bio: "Desenvolvedora focada em criar experiências web modernas, funcionais e acessíveis.",
  sobre: "Este site é dinâmico: os projetos e informações de contato são montados via JavaScript, facilitando a atualização sem mexer no HTML.",
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

function renderizar() {
  document.getElementById("nome").textContent = dadosSite.nome;
  document.getElementById("assinatura").textContent = dadosSite.assinatura;
  document.getElementById("bio").textContent = dadosSite.bio;
  document.getElementById("sobreTexto").textContent = dadosSite.sobre;
  document.getElementById("ano").textContent = new Date().getFullYear();

  const listaProjetos = document.getElementById("listaProjetos");
  dadosSite.projetos.forEach((projeto) => {
    const artigo = document.createElement("article");
    artigo.className = "project";
    artigo.innerHTML = `
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
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

renderizar();
