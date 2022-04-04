const core = require('@retrogen/core')
const generic = require('./templates/generic')

async function generate (owner, types, dates) {
  const data = await core({ owner: owner }, dates)
  const markdown = await generic(data, types)

  return markdown
}

module.exports = generate
