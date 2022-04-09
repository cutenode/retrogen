const generateRepoInformationFromData = require('../tools/generateRepoInformationFromData')
const generateBody = require('../tools/generateBody')
const generateDoc = require('../tools/generateDoc')

async function generateBasicRetro (data, options = {}) {
  // configure the internal options object. `options` should never be used outside of this object.
  const usableOptions = {
    heading: options.heading ?? `# Retrospective for \`${data.meta.owner}\``,
    preface: options.preface ?? `Reporting on ${data.meta.issues.count} Issues from ${data.meta.issues.authors.count} authors, ${data.meta.pullRequests.count} Pull Requests from ${data.meta.pullRequests.authors.count} authors, and ${data.meta.discussions.count} Discussions from ${data.meta.discussions.authors.count} authors.`,
    headerDates: options.headerDates ?? false,
    start: options.start ?? undefined,
    end: options.end ?? undefined
  }

  // add some custom logic for custom start/end date in the header
  if (usableOptions.headerDates && usableOptions.start && usableOptions.start) {
    usableOptions.heading = `${usableOptions.heading} from ${usableOptions.start} to ${usableOptions.end}`
  }

  const repos = await generateRepoInformationFromData(data)

  const body = await generateBody(repos)

  const output = await generateDoc(usableOptions.heading, usableOptions.preface, body)
  return output
}

module.exports = generateBasicRetro
