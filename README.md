# Site pessoal com GitHub Pages

Este repositório contém um site pessoal dinâmico (renderizado em JavaScript) para apresentar projetos e contatos.

## Estrutura

- `index.html`: estrutura principal da página.
- `styles.css`: estilo visual do site.
- `script.js`: dados e renderização dinâmica dos conteúdos.
- `.github/workflows/deploy.yml`: pipeline de deploy automático para GitHub Pages.

## Como editar seus dados

Abra `script.js` e ajuste o objeto `dadosSite`:
- Nome e bio.
- Lista de projetos.
- Contatos.

## Deploy

O deploy acontece automaticamente via GitHub Actions a cada push na branch `main`.

Para funcionar no GitHub:
1. Vá em **Settings > Pages**.
2. Em **Source**, selecione **GitHub Actions**.
3. Faça push deste projeto para a branch `main`.
