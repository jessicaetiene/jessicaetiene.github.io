window.renderProjectPage = (projectId) => {
  const data = window.PORTFOLIO_DATA;
  const lang = localStorage.getItem('idioma') || 'pt';
  const t = data.languages[lang];
  const project = data.projects[projectId];
  if (!project) return;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
  const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  set('tituloProjeto', project.name[lang]);
  set('descricaoProjeto', project.description[lang]);
  set('repoLabel', t.repo);
  const link = document.getElementById('linkProjeto');
  if (link) { link.href = project.repo; if (!link.textContent.trim()) link.textContent = t.repo; }
  const back = document.querySelector('.btn');
  if (back) back.textContent = t.back;
};
