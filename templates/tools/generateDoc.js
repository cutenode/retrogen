async function generateDoc (heading, preface, body) {
  // base string we're going to build off of
  let output = ''

  if (heading) {
    output = output.concat(`${heading}\n\n`)
  }

  if (preface) {
    output = output.concat(`${preface}\n\n`)
  }

  if (body) {
    output = output.concat(body)
  } else {
    throw new Error('No body provided to generateFullDoc. The `body` argument is required.')
  }
  output = output.trim()

  return output
}

module.exports = generateDoc
