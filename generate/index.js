const core = require('@retrogen/core')
const templates = require('@retrogen/templates')

async function generate (owner, dates, options) {
  if (!owner) throw new Error('No owner provided. You must provide an owner to @retrogen/generate.')

  const usableOptions = {
    headerDates: options?.headerDates ?? true,
    start: dates.start,
    end: dates.end
  }
  const data = await core(owner, usableOptions)
  const markdown = await templates('basic', data, usableOptions)

  if (options?.log) {
    console.log(markdown)
  }

  return markdown
}

module.exports = generate
