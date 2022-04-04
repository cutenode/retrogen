const generate = require('@retrogen/generate')
const { DateTime } = require('luxon')

async function markdown () {
  // the types of data we want to see in our markdown document
  const types = ['issues', 'prs', 'discussions']

  const now = DateTime.now()
  const then = now.minus({ days: 7 })

  // the date range we want to get information for
  const dates = {
    start: then.toISODate(),
    end: now.toISODate()
  }

  // this will generate markdown for the Node.js GitHub organization that includes data for Issues, PRs, and Discussions from 2022-03-27 to 2022-04-02
  const document = await generate('github', types, dates)
  console.log(document)
}

markdown()
