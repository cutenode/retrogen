const { writeFile } = require('node:fs/promises')
const { resolve } = require('node:path');
const core = require('@retrogen/core')
const generateRepoInformationFromData = require('../tools/generateRepoInformationFromData')
const generateBody = require('../tools/generateBody')
const dir = require('../dir')
const dates = require('./dates.json')


async function setup() {
  // configuration variables that we use later
  const nodejsReferencePath = resolve(`${dir}/testUtils/reference/generateRepoInformationFromData.nodejs.json`)
  const twilioReferencePath = resolve(`${dir}/testUtils/reference/generateRepoInformationFromData.twilio.json`)
  
  // get data and compose it
  const nodejsData = await core('nodejs', dates)
  const twilioData = await core('twilio', dates)
  const nodejsComposedData = await generateRepoInformationFromData(nodejsData)
  const twilioComposedData = await generateRepoInformationFromData(twilioData)
  
  // write the composed data to its final location
  await writeFile(nodejsReferencePath, JSON.stringify(nodejsComposedData, null, 2))
  await writeFile(twilioReferencePath, JSON.stringify(twilioComposedData, null, 2))
}

setup()