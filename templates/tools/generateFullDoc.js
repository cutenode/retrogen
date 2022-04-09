// generate the final string we're going to send back
async function generateFullDoc (heading, preface, body) {
  // base string we're going to build off of
  let output = ''

  if (heading) {
    output = output.concat(`${heading}\n\n`)
  }

  if (preface) {
    output = output.concat(`${preface}`)
    output = output.trim()
    output = output.concat('\n') // do this to make sure we don't have weird whitespace. there is weird whitespace without it and I don't know why.
  }

  if (body) {
    output = output.concat(body)
  } else {
    throw new Error('No body provided to generateFullDoc. The `body` argument is required.')
  }
  output = output.trim()

  return output
}

module.export = generateFullDoc
