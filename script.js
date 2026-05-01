// Compat loader: mantém páginas antigas funcionando após reorganização.
(function () {
  const s = document.createElement('script');
  s.src = './assets/js/script.js';
  document.head.appendChild(s);
})();
