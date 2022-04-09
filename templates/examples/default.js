const templates = require('@retrogen/templates')
const data = require('./data/example.json') // assuming you've got generated data in a file

async function useTemplate () {
  // use our basic template with the imported data
  const result = await templates('basic', data)

  // output the result
  console.log(result)
}

useTemplate()
