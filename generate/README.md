# @retrogen/generate

A tool that generates Markdown retros for GitHub users and organizaations.

## Usage

```js
const generate = require('@retrogen/generate')

async function markdown() {
  // this will generate markdown for the Node.js GitHub organization that
  // includes data for Issues, PRs, and Discussions from 2022-03-27 to 2022-04-02
  const document = await generate('nodejs', ['issues', 'prs', 'discussions'], { start: '2022-03-27', end: '2022-04-02'})

  console.log(document)
}

markdown()
```

