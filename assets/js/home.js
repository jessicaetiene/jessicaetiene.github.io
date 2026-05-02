(() => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const CONTACTS = [
    { icon: '🐙', label: 'GitHub', value: 'jessicaetiene', href: 'https://github.com/jessicaetiene' },
    { icon: '💼', label: 'LinkedIn', value: 'jessicaetiene', href: 'https://www.linkedin.com/in/jessicaetiene/' },
    { icon: '✉️', label: 'Email', value: 'jessicaetiene@gmail.com', href: 'mailto:jessicaetiene@gmail.com' }
  ];

  const TECHNOLOGIES = [
    { name: 'Java', badge: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white' },
    { name: 'Kotlin', badge: 'https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white' },
    { name: 'Spring Boot', badge: 'https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white' },
    { name: 'Kafka', badge: 'https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white' },
    { name: 'PostgreSQL', badge: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' },
    { name: 'Docker', badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
    { name: 'AWS', badge: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white' }
  ];

  const getStoredLang = () => localStorage.getItem('idioma') || 'pt';
  const getStoredTheme = () => localStorage.getItem('theme') || 'light';

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  const renderContacts = () => {
    const list = document.getElementById('contatos');
    if (!list) return;
    list.innerHTML = '';
    CONTACTS.forEach(({ icon, label, value, href }) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = href;
      a.target = href.startsWith('http') ? '_blank' : '_self';
      a.rel = href.startsWith('http') ? 'noopener noreferrer' : '';
      a.innerHTML = `<span class="contact-icon" aria-hidden="true">${icon}</span><span>${label}: ${value}</span>`;
      li.appendChild(a);
      list.appendChild(li);
    });
  };

  const renderTechBadges = () => {
    const container = document.getElementById('badgesTecnologias');
    if (!container) return;
    container.innerHTML = '';
    TECHNOLOGIES.forEach(({ name, badge }) => {
      const image = document.createElement('img');
      image.className = 'tech-badge';
      image.src = badge;
      image.alt = `${name} badge`;
      image.loading = 'lazy';
      container.appendChild(image);
    });
  };

  const loadProjectDescription = async (projectId, lang, fallback = "") => {
    try {
      const response = await fetch(`./assets/data/descriptions/${projectId}/${lang}.json`);
      if (!response.ok) throw new Error(`Failed to load description for ${projectId} (${lang})`);
      const descriptionData = await response.json();
      return descriptionData.description || fallback;
    } catch (error) {
      console.warn(error);
      return fallback;
    }
  };

  const renderProjects = async (lang) => {
    const list = document.getElementById('listaProjetos');
    if (!list) return;
    list.innerHTML = '';
    for (const [id, project] of Object.entries(data.projects)) {
      const card = document.createElement('a');
      card.className = 'project';
      card.href = `./projects/${id}.html`;
      const title = document.createElement('h3');
      title.textContent = project.name[lang];
      const desc = document.createElement('p');
      desc.textContent = await loadProjectDescription(id, lang, '');
      const cta = document.createElement('small');
      cta.textContent = lang === 'pt' ? 'Ver detalhes →' : 'View details →';
      card.append(title, desc, cta);
      list.appendChild(card);
    }
  };

  const applyTheme = (theme, t) => {
    const darkMode = theme === 'dark';
    document.body.classList.toggle('dark', darkMode);
    const toggle = document.getElementById('themeToggle');
    if (toggle) toggle.textContent = darkMode ? t.themeLight : t.themeDark;
  };

  const applyLanguage = async (lang) => {
    const selectedLang = data.languages[lang] ? lang : 'pt';
    const t = data.languages[selectedLang];
    localStorage.setItem('idioma', selectedLang);

    document.documentElement.lang = selectedLang === 'pt' ? 'pt-BR' : 'en-US';
    document.title = t.title;

    setText('nome', data.profile.name);
    setText('navSobre', t.navAbout);
    setText('navPortfolio', t.navPortfolio);
    setText('roleLabel', t.role);
    setText('contatoTitulo', t.contact);
    setText('tecnologiasTitulo', t.technologies);
    setText('bio', data.profile.bio[selectedLang]);
    setText('projetosHint', t.projectsHint);
    setText('quemSouLabel', t.whoLabel);
    setText('ondeTrabalhoLabel', t.whereLabel);
    setText('quemSou', data.profile.who[selectedLang]);
    setText('ondeTrabalho', data.profile.where[selectedLang]);

    const aboutTitle = document.querySelector('#sobre h2');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    const projectsTitle = document.querySelector('#projetos h2');
    if (projectsTitle) projectsTitle.textContent = t.projectsTitle;

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === selectedLang);
    });

    applyTheme(getStoredTheme(), t);
    await renderProjects(selectedLang);
  };

  const bindEvents = () => {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', nextTheme);
        applyLanguage(getStoredLang());
      });
    }

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach((el) => el.classList.remove('active'));
        link.classList.add('active');
      });
    });
  };

  const photo = document.getElementById('fotoPerfil');
  if (photo) photo.src = data.profile.photo;

  setText('ano', String(new Date().getFullYear()));
  setText('assinatura', data.profile.name);

  renderContacts();
  renderTechBadges();
  bindEvents();
  applyLanguage(getStoredLang());
})();
