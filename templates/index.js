const basic = require('./templates/basic')

async function returnRenderedTemplate (template, data, options) {
  const allowedTemplates = ['basic']

  if (template === 'basic') {
    return await basic(data, options)
  } else {
    throw new Error(`Unknown template: ${template}. Please use a template from the list: ${allowedTemplates}`)
  }
}

module.exports = returnRenderedTemplate
module.exports.basic = basic
