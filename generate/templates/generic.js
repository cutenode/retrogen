async function generateGenericMarkdown (data, options = {}) {
  const usableOptions = {
    heading: options.heading ?? `# Retrospective for \`${data.meta.owner}\``,
    preface: options.preface ?? `Reporting on ${data.meta.issues.count} Issues from ${data.meta.issues.authors.count} authors, ${data.meta.pullRequests.count} Pull Requests from ${data.meta.pullRequests.authors.count} authors, and ${data.meta.discussions.count} Discussions from ${data.meta.discussions.authors.count} authors.\n\n`
  }

  const repos = {}

  for (const type in data) {
    if (type === 'issues' || type === 'pullRequests' || type === 'discussions') {
      data[type].forEach(instance => {
      // generate the bullet, since we're always going to use it
        const bullet = `- ${instance.meta.title} ([${instance.meta.number}](${instance.meta.url}))`

        // if this is the first time we're encountering the repo, create a section for into
        if (repos[instance.repo.name] === undefined) {
          repos[instance.repo.name] = {
            open: [],
            merged: [],
            closed: []
          }
        }

        // populates the appropriate array with the appropriate markdown:
        if ((instance.meta.type === 'Discussion') || (instance.status.state === 'OPEN' && !instance.status.locked)) {
          repos[instance.repo.name].open.push({ bullet, type: instance.meta.type })
        } else if (instance.status.state === 'MERGED') {
          repos[instance.repo.name].merged.push({ bullet, type: instance.meta.type })
        } else if (instance.status.state === 'CLOSED' && !instance.status.locked) {
          repos[instance.repo.name].closed.push({ bullet, type: instance.meta.type })
        }
      })
    }
  }

  // concat all the strings we've built into a markdown piece
  let markdown = ''

  // cache the headings we've already created so we don't dupe them
  const garbageCache = []

  // I am sorry for how gross this is
  for (const repo in repos) { // go over every repo in the sections object
    const heading = `### ${repo}`
    // write the heading and push the heading to the
    // headings object if it's not there so we only write it once
    //
    // this is a weird hack but it seems to work so... meh
    if (!garbageCache.includes(heading)) {
      garbageCache.push(heading)
      markdown = markdown.concat(`\n${heading}\n`)
    }
    // loop over the states (open, merged closed) in each repo
    for (const state in repos[repo]) {
      if (state === 'open') {
        for (const instance in repos[repo][state]) {
          // same ugly hack as above, just using headings as a store that we can check against before writing the heading
          // write each bullet out
          if (!garbageCache.includes(`${heading} ${state}`)) {
            garbageCache.push(`${heading} ${state}`)
            if (repos[repo][state][instance].type === 'Issue') {
              const localHeading = await generateSectionHeader(4, 'Issues', state)
              markdown = markdown.concat(localHeading)
            }

            if (repos[repo][state][instance].type === 'PullRequest') {
              const localHeading = await generateSectionHeader(4, 'Pull Requests', state)
              markdown = markdown.concat(localHeading)
            }
          }
          markdown = markdown.concat(`${repos[repo][state][instance].bullet}\n`)
        }
      } else if (state === 'merged') {
        for (const instance in repos[repo][state]) {
          // same ugly hack as above, just using headings as a store that we can check against before writing the heading
          // write each bullet out
          if (!garbageCache.includes(`${heading} ${state}`)) {
            garbageCache.push(`${heading} ${state}`)
            const localHeading = await generateSectionHeader(4, 'Issues', state)
            markdown = markdown.concat(localHeading)
          }
          markdown = markdown.concat(`${repos[repo][state][instance].bullet}\n`)
        }
      } else if (state === 'closed') {
        for (const instance in repos[repo][state]) {
          // same ugly hack as above, just using headings as a store that we can check against before writing the heading
          // write each bullet out
          if (!garbageCache.includes(`${heading} ${state}`)) {
            garbageCache.push(`${heading} ${state}`)
            if (repos[repo][state][instance].type === 'Issue') {
              const localHeading = await generateSectionHeader(4, 'Issues', state)
              markdown = markdown.concat(localHeading)
            }

            if (repos[repo][state][instance].type === 'PullRequest') {
              const localHeading = await generateSectionHeader(4, 'Pull Requests', state)
              markdown = markdown.concat(localHeading)
            }
          }
          markdown = markdown.concat(`${repos[repo][state][instance].bullet}\n`)
        }
      }
    }
  }

  // generate the final string we're going to send back
  let output = ''
  output = output.concat(`${usableOptions.heading}\n\n`)
  output = output.concat(`${usableOptions.preface}`)
  output = output.trim()
  output = output.concat('\n')
  output = output.concat(markdown)
  output = output.trim()

  return output
}

async function generateSectionHeader (level, type, state) {
  let header = '\n'
  for (let i = 0; i < level; i++) {
    header = header.concat('#')
  }
  if (state !== undefined) {
    const capitalizedState = state.charAt(0).toUpperCase() + state.slice(1)
    header = header.concat(' ', capitalizedState, ' ', type)
  } else {
    header = header.concat(' ', type)
  }
  header = header.concat('\n\n')

  return header
}

module.exports = generateGenericMarkdown
