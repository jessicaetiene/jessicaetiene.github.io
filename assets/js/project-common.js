window.renderProjectPage = async (projectId) => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const getStoredLang = () => localStorage.getItem('idioma') || 'pt';
  const getStoredTheme = () => localStorage.getItem('theme') || 'light';
  const applyTheme = (theme) => {
    document.body.classList.toggle('dark', theme === 'dark');
  };

  const project = data.projects?.[projectId];
  const root = document.getElementById('projectRoot');
  if (!project || !root) return;

  const loadDescriptions = async (lang) => {
    const fallback = {
      name: projectId,
      description: ''
    };

    try {
      const response = await fetch(`../assets/data/descriptions/${projectId}/${lang}.json`);
      if (!response.ok) return fallback;
      const json = await response.json();
      return {
        ...fallback,
        ...json
      };
    } catch (_error) {
      return fallback;
    }
  };

  const render = async (lang) => {
    const selectedLang = data.languages[lang] ? lang : 'pt';
    const t = data.languages[selectedLang];
    const descriptionData = await loadDescriptions(selectedLang);

    localStorage.setItem('idioma', selectedLang);
    document.documentElement.lang = selectedLang === 'pt' ? 'pt-BR' : 'en-US';
    applyTheme(getStoredTheme());

    const name = descriptionData.name;
    const description = descriptionData.description;
    const sideDescription = descriptionData.sideDescription || description;
    const topics = descriptionData.studyTopics || [];

    root.innerHTML = `
      <aside class="project-sidebar">
        <a class="project-nav-item active" href="#">${selectedLang === 'pt' ? 'Início' : 'Home'}</a>
        ${topics.map((topic) => `<a class="project-nav-item" href="#">${topic.title}</a>`).join('')}

        <div class="project-side-card">
          <h3>${name}</h3>
          <p>${sideDescription}</p>
        </div>
      </aside>

      <section class="project-content">
        <div class="project-top-actions">
          <a class="project-back-link" href="../index.html#portfolio">← ${t.back}</a>
          <div class="top-actions-right">
            <div class="lang-switch" role="group" aria-label="Language selector">
              <button class="lang-btn ${selectedLang === 'pt' ? 'active' : ''}" data-lang="pt" aria-label="Português">
                <img src="https://flagcdn.com/w20/br.png" alt="Bandeira do Brasil" width="20" height="14" />
              </button>
              <button class="lang-btn ${selectedLang === 'en' ? 'active' : ''}" data-lang="en" aria-label="English">
                <img src="https://flagcdn.com/w20/us.png" alt="United States flag" width="20" height="14" />
              </button>
            </div>
            <button id="themeToggle" class="theme-toggle icon-toggle" aria-label="Alternar tema">${document.body.classList.contains('dark') ? '🌙' : '☀️'}</button>
          </div>
        </div>

        <header class="project-content-header">
          <h1>${name}</h1>
          <p>${description}</p>
        </header>

        <a id="linkProjeto" class="repo-link" href="${project.repo}" target="_blank" rel="noopener noreferrer">
          <svg class="repo-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8a8.01 8.01 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52 0-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.54 7.54 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
          ${t.repo}
        </a>

        ${topics.length ? `
          <section class="project-highlight">
            <h2>${selectedLang === 'pt' ? 'O que estou estudando neste laboratório' : 'What I am studying in this lab'}</h2>
            <p>${selectedLang === 'pt' ? 'Este projeto funciona como um laboratório prático para consolidar meus estudos e praticar os conceitos no dia a dia.' : 'This project works as a practical lab to consolidate my studies and practice concepts daily.'}</p>
          </section>

          <ul class="study-list cards">
            ${topics.map((topic) => `<li><h3>${topic.title}</h3><p>${topic.description}</p></li>`).join('')}
          </ul>
        ` : ''}
      </section>
    `;

    root.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => render(btn.dataset.lang));
    });

    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', nextTheme);
        render(selectedLang);
      });
    }
  };

  render(getStoredLang());
};
