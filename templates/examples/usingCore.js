const templates = require('@retrogen/templates')
const core = require('@retrogen/core')
const { DateTime } = require('luxon')

async function useTemplate () {
  // set up relative dates
  const now = DateTime.now()
  const then = now.minus({ days: 7 })

  // convert them to usable ISO dates
  const dates = {
    start: then.toISODate(),
    end: now.toISODate()
  }

  // fetch and format our data from GitHub
  const data = await core('nodejs', dates)

  // use our basic template with the generated/formatted data
  const result = await templates('basic', data)

  // output the result
  console.log(result)
}

useTemplate()
