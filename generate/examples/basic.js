const generate = require('@retrogen/generate')

async function markdown () {
  // the types of data we want to see in our markdown document
  const types = ['issues', 'prs', 'discussions']

  // the date range we want to get information for
  const dates = {
    start: '2022-03-27',
    end: '2022-04-02'
  }

  // this will generate markdown for the Node.js GitHub organization that includes data for Issues, PRs, and Discussions from 2022-03-27 to 2022-04-02
  const document = await generate('nodejs', types, dates)
  console.log(document)
}

markdown()
