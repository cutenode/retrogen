const core = require('@retrogen/core')

async function generate () {
  const dates = {
    start: '2022-01-01',
    end: '2022-01-31'
  }

  const data = await core('nodejs', dates)

  console.log(JSON.stringify(data, null, 2))
}

generate()
