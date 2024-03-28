const test = require('node:test')
const { deepStrictEqual } = require('node:assert')
const { readFile, writeFile, unlink } = require('node:fs/promises')
const { resolve } = require('node:path');
const core = require('@retrogen/core')
const dir = require('../dir')
const generateRepoInformationFromData = require('../tools/generateRepoInformationFromData')
const generateBody = require('../tools/generateBody')
const dates = require('../testUtils/dates.json')

test('working with the core module directly should not error', async (context) => {
  const data = await core('nodejs', dates)
  const composedData = await generateRepoInformationFromData(data)
  const reference = await readFile(resolve(`${dir}/testUtils/reference/body.md`), { encoding: 'utf8' })

  await context.test('check that generated output has not changed', async (context) => {
    const body = await generateBody(composedData)

    // write a file rather than doing something like copy/pasting it from the terminal
    const assertionPath = resolve(`${dir}/testUtils/reference/body.assertion.md`)
    await writeFile(assertionPath, body)
    const assertion = await readFile(assertionPath, { encoding: 'utf8' })
    // the actual test
    deepStrictEqual(assertion, reference)
    // delete the assertion file we just wrote
    await unlink(assertionPath)
  })
})