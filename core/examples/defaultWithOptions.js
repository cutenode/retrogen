const core = require('@retrogen/core')

async function generate () {
  const dates = {
    start: '2022-01-01',
    end: '2022-01-31'
  }

  const options = {
    sort: 'interactions', // default is `updated`, but assume we want to see what's most interacted with
    per_page: 50 // default is 100. Not sure why you'd want to limit this outside of *knowing* you have a small size and speeding up the query.
  }

  const data = await core('nodejs', dates, options)

  console.log(JSON.stringify(data, null, 2))
}

generate()
