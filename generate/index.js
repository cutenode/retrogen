const core = require('@retrogen/core')
const generic = require('./templates/generic')

async function generate (owner, dates) {
  const data = await core({ owner: owner }, dates)
  const markdown = await generic(data)

  return markdown
}

module.exports = generate
