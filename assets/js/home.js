(() => {
  const data = window.PORTFOLIO_DATA;
  const lang = localStorage.getItem('idioma') || 'pt';
  const t = data.languages[lang];
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
  document.title = t.title;
  const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  set('nome', data.profile.name);
  set('navSobre', t.navAbout);
  set('navPortfolio', t.navPortfolio);
  set('contatoTitulo', t.contact);
  set('tecnologiasTitulo', t.technologies);
  set('bio', data.profile.bio[lang]);
  set('projetosHint', t.projectsHint);
  const photo = document.getElementById('fotoPerfil'); if (photo) photo.src = './resources/images/profile.jpeg';
})();
