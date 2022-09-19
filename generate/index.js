const core = require('@retrogen/core')
const templates = require('@retrogen/templates')

async function generate (owner, dates, options) {
  if (!owner) throw new Error('No owner provided. You must provide an owner to @retrogen/generate.')

  const usableOptions = {
    headerDates: options?.headerDates ?? true,
    start: dates.start,
    end: dates.end,
    log: options?.log ?? false,
    json: options?.json ?? false,
    includeData: options?.includeData ?? false,
  }

  // handle the situation where someone does includeData but doesn't output as JSON
  if(usableOptions.includeData === true && usableOptions.json === false) throw new Error('You must output as JSON if you want to use the includeData option.')
  
  // collect and build our data and output
  const data = await core(owner, usableOptions)
  const markdown = await templates('basic', data, usableOptions)
  const returnable = {
    data: data,
    markdown: markdown
  }

  // handle various options
  if (usableOptions.json === true && usableOptions.includeData === true) { // both JSON and includeData
    const returnedJSON = JSON.stringify(returnable, null, 2)

    if (usableOptions.log) {
      console.log(returnedJSON)
    }

    return returnedJSON
  } else if(usableOptions.json === true && usableOptions.includeData === false) { // only JSON
    const slimmedReturnable = {
      markdown: returnable.markdown
    }

    const returnedJSON = JSON.stringify(slimmedReturnable, null, 2)

    if (usableOptions.log) {
      console.log(slimmedReturnable)
    }
  
    return slimmedReturnable
  } else { // default output
    if (usableOptions.log) {
      console.log(returnable.markdown)
    }

    return returnable.markdown
  }
}

module.exports = generate
