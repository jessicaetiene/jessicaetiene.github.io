# Como criar uma nova página de projeto reaproveitando o template

Este guia usa o template já existente de páginas em `projects/*.html` + `assets/js/project-common.js`.

## 1) Defina o identificador do projeto

Escolha um `projectId` em *kebab-case* (ex.: `meu-novo-projeto`).

Esse ID será usado em:
- `projects/<projectId>.html`
- `assets/js/<projectId>.js`
- `assets/data/descriptions/<projectId>/pt.json`
- `assets/data/descriptions/<projectId>/en.json`
- chave em `window.PORTFOLIO_DATA.projects` (arquivo `assets/js/site-data.js`)

## 2) Crie a página HTML a partir do template

Crie o arquivo `projects/<projectId>.html` copiando qualquer projeto existente (por exemplo `projects/kafka-lab.html`) e ajuste:

- `<title>`
- `data-project-id="<projectId>"` no `<body>`
- último `<script>` para `../assets/js/<projectId>.js`

Estrutura mínima:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nome do Projeto | Jéssica Etiene</title>
    <link rel="stylesheet" href="../assets/css/styles.css" />
  </head>
  <body data-project-id="meu-novo-projeto">
    <main id="projectRoot" class="project-layout card"></main>

    <script src="../assets/js/site-data.js"></script>
    <script src="../assets/js/project-common.js"></script>
    <script src="../assets/js/meu-novo-projeto.js"></script>
  </body>
</html>
```

## 3) Crie o arquivo JS da página

Crie `assets/js/<projectId>.js` com:

```js
(() => window.renderProjectPage('<projectId>'))();
```

Exemplo real: `assets/js/kafka-lab.js`.

## 4) Registre o projeto em `site-data.js`

No objeto `window.PORTFOLIO_DATA.projects`, adicione uma nova chave:

```js
'<projectId>': {
  repo: 'https://github.com/usuario/repositorio',
  name: { pt: 'Nome em PT', en: 'Name in EN' },
  description: {
    pt: 'Descrição curta em português.',
    en: 'Short description in English.'
  },
  studyTopics: {
    pt: [
      { title: 'Tópico 1', description: 'Descrição do tópico.' }
    ],
    en: [
      { title: 'Topic 1', description: 'Topic description.' }
    ]
  }
}
```

> `studyTopics` é opcional, mas recomendado para preencher a seção de estudos da página.

## 5) Crie os arquivos de descrição por idioma

Crie a pasta e os JSONs:

- `assets/data/descriptions/<projectId>/pt.json`
- `assets/data/descriptions/<projectId>/en.json`

Modelo sugerido:

```json
{
  "name": "Nome do projeto",
  "description": "Descrição principal exibida no topo.",
  "sideDescription": "Resumo exibido no card lateral.",
  "studyTopics": [
    {
      "title": "Tópico",
      "description": "Descrição do tópico."
    }
  ]
}
```

Se algum campo não existir no JSON, o template usa *fallback* dos dados em `site-data.js`.

## 6) Garanta que o projeto apareça na home

A lista da home é renderizada a partir de `window.PORTFOLIO_DATA.projects`. Ao adicionar o item no passo 4, ele já deve aparecer automaticamente no portfólio.

## 7) Teste localmente

Opções simples:

- Abrir `index.html` e clicar no novo card do projeto.
- Abrir diretamente `projects/<projectId>.html`.

Checklist:
- Nome/descrição em PT e EN.
- Botão de tema funcionando.
- Link do repositório abrindo corretamente.
- Navegação lateral com tópicos (se configurados).

## 8) Arquivos mínimos para um novo projeto

- `projects/<projectId>.html`
- `assets/js/<projectId>.js`
- `assets/js/site-data.js` (entrada nova em `projects`)
- `assets/data/descriptions/<projectId>/pt.json`
- `assets/data/descriptions/<projectId>/en.json`

Com isso, a nova página reaproveita 100% do template compartilhado em `assets/js/project-common.js`.
