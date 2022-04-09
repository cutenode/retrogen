const core = require('@retrogen/core')
const { DateTime } = require('luxon')

async function generate () {
  const now = DateTime.now()
  const then = now.minus({ days: 7 })
  const dates = {
    start: then.toISODate(),
    end: now.toISODate()
  }

  const data = await core('nodejs', dates)

  console.log(JSON.stringify(data, null, 2))
}

generate()
