const { writeFile } = require('node:fs/promises')
const { resolve } = require('node:path')
const core = require('@retrogen/core')
const generateRepoInformationFromData = require('../tools/generateRepoInformationFromData')
const generateBody = require('../tools/generateBody')
const dir = require('../dir')
const dates = require('./dates.json')

async function setup () {
  const data = await core('nodejs', dates)
  const composedData = await generateRepoInformationFromData(data)
  const referencePath = resolve(`${dir}/testUtils/reference/body.md`)
  const body = await generateBody(composedData)

  await writeFile(referencePath, body)
}

setup()
