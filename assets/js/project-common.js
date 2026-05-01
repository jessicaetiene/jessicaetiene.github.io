window.renderProjectPage = (projectId) => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const lang = localStorage.getItem('idioma') || 'pt';
  const t = data.languages[lang] || data.languages.pt;
  const project = data.projects?.[projectId];
  const root = document.getElementById('projectRoot');

  if (!project || !root) return;

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';

  root.innerHTML = `
    <aside class="project-sidebar">
      <a class="project-nav-item active" href="#">${project.name[lang] || project.name.pt}</a>
      <a class="project-nav-item" href="../index.html#portfolio">${t.back}</a>

      <div class="project-side-card">
        <h3>${project.name[lang] || project.name.pt}</h3>
        <p>${project.description[lang] || project.description.pt}</p>
      </div>
    </aside>

    <section class="project-content">
      <header class="project-page-header">
        <h1>${project.name[lang] || project.name.pt}</h1>
      </header>
      <p>${project.description[lang] || project.description.pt}</p>
      <a id="linkProjeto" class="repo-link" href="${project.repo}" target="_blank" rel="noopener noreferrer">
        ${t.repo}
      </a>
    </section>
  `;
};
