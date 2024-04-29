const test = require('node:test')
const { deepStrictEqual } = require('node:assert')
const core = require('@retrogen/core')
const generateRepoInformationFromData = require('../tools/generateRepoInformationFromData')
const nodejsReference = require('../testUtils/reference/generateRepoInformationFromData.nodejs.json')
const twilioReference = require('../testUtils/reference/generateRepoInformationFromData.twilio.json')
const dates = require('../testUtils/dates.json')

test('working with the core module directly should not error', async (context) => {
  const nodejsData = await core('nodejs', dates)
  const twilioData = await core('twilio', dates)

  await context.test('should have the correct keys at the highest level', async (context) => {
    const nodejsComposedData = await generateRepoInformationFromData(nodejsData)
    const twilioComposedData = await generateRepoInformationFromData(twilioData)
    deepStrictEqual(Object.keys(nodejsComposedData), Object.keys(nodejsReference))
    deepStrictEqual(Object.keys(twilioComposedData), Object.keys(twilioReference))
  })

  await context.test('ensure all entries have open, merged, and closed', async (context) => {
    const nodejsComposedData = await generateRepoInformationFromData(nodejsData)
    for (const entry in nodejsComposedData) {
      deepStrictEqual(Object.hasOwn(nodejsComposedData[entry], 'open'), true)
      deepStrictEqual(Object.hasOwn(nodejsComposedData[entry], 'merged'), true)
      deepStrictEqual(Object.hasOwn(nodejsComposedData[entry], 'closed'), true)
    }
  })
})
