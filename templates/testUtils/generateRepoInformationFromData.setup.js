const { writeFile } = require('node:fs/promises')
const { resolve } = require('node:path')
const core = require('@retrogen/core')
const generateRepoInformationFromData = require('../tools/generateRepoInformationFromData')
const dir = require('../dir')
const dates = require('./dates.json')

async function setup () {
  // configuration variables that we use later
  const nodejsReferencePath = resolve(`${dir}/testUtils/reference/generateRepoInformationFromData.nodejs.json`)
  const kubernetesReferencePath = resolve(`${dir}/testUtils/reference/generateRepoInformationFromData.kubernetes.json`)

  // get data and compose it
  const nodejsData = await core('nodejs', dates)
  const kubernetesData = await core('kubernetes', dates)
  const nodejsComposedData = await generateRepoInformationFromData(nodejsData)
  const kubernetesComposedData = await generateRepoInformationFromData(kubernetesData)

  console.log('nodejsData', nodejsData)
  console.log('kubernetesData', kubernetesData)
  console.log('nodejsComposedData',nodejsComposedData)
  console.log('kubernetesComposedData',kubernetesComposedData)

  // write the composed data to its final location
  await writeFile(nodejsReferencePath, JSON.stringify(nodejsComposedData, null, 2))
  await writeFile(kubernetesReferencePath, JSON.stringify(kubernetesComposedData, null, 2))
}

setup()
