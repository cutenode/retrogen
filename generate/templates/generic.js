async function generateGenericMarkdown (data, types, options = {}) {
  const usableOptions = {
    heading: options.heading ?? `# Retrospective for \`${data.meta.owner}\``,
    preface: options.preface ?? `Reporting on ${data.meta.issues.count} Issues from ${data.meta.issues.authors.count} authors, ${data.meta.pullRequests.count} Pull Requests from ${data.meta.pullRequests.authors.count} authors, and ${data.meta.discussions.count} Discussions from ${data.meta.discussions.authors.count} authors.\n\n`
  }

  const typeMarkdown = {}
  for (const type of types) {
    // define the heading depending on the type we get
    let heading
    let genericData

    if (type === 'issues') {
      heading = 'Issues'
      genericData = data.issues
    } else if (type === 'prs') {
      heading = 'Pull Requests'
      genericData = data.pullRequests
    }
    if (type === 'discussions') {
      heading = 'Discussions'
      genericData = data.discussions
    }

    // static content
    const headers = {
      section: `## ${heading}`,
      open: `#### Open ${heading}`,
      merged: `#### Merged ${heading}`,
      closed: `#### Closed ${heading}`
    }

    // dynamic content that will be populated
    const bullets = {
      open: [],
      merged: [],
      closed: []
    }

    const sections = {}

    // processing each issue and populating the data that we use to construct markdown
    genericData.forEach(instance => {
      // generate the bullet, since we're always going to use it
      const bullet = `- ${instance.meta.title} ([${instance.meta.number}](${instance.meta.url}))`

      // if this is the first time we're encountering the repo, create a section for into
      if (sections[instance.repo.name] === undefined) {
        sections[instance.repo.name] = {
          open: [],
          merged: [],
          closed: []
        }
      }

      // populates the appropriate array with the appropriate markdown:
      if ((instance.meta.type === 'Discussion') || (instance.status.state === 'OPEN' && !instance.status.locked)) {
        bullets.open.push(bullet)
        sections[instance.repo.name].open.push({ bullet })
      } else if (instance.status.state === 'MERGED') {
        bullets.merged.push(bullet)
        sections[instance.repo.name].merged.push({ bullet })
      } else if (instance.status.state === 'CLOSED' && !instance.status.locked) {
        bullets.closed.push(bullet)
        sections[instance.repo.name].closed.push({ bullet })
      }
    })

    // concat all the strings we've built into a markdown piece
    let markdown = ''

    // cache the headings we've already created so we don't dupe them
    const garbageCache = []

    // I am sorry for how gross this is
    for (const repo in sections) { // go over every repo in the sections object
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
      for (const state in sections[repo]) {
        if (state === 'open') {
          // same ugly hack as above, just using headings as a store that we can check against before writing the heading
          // write each bullet out
          for (const instance in sections[repo][state]) {
            if (!garbageCache.includes(`${heading} ${state}`)) {
              garbageCache.push(`${heading} ${state}`)
              markdown = markdown.concat(`\n${headers.open}\n`)
            }
            markdown = markdown.concat(`${sections[repo][state][instance].bullet}\n`)
          }
        } else if (state === 'merged') {
          // same ugly hack as above, just using headings as a store that we can check against before writing the heading
          // write each bullet out
          for (const instance in sections[repo][state]) {
            if (!garbageCache.includes(`${heading} ${state}`)) {
              garbageCache.push(`${heading} ${state}`)
              markdown = markdown.concat(`\n${headers.merged}\n`)
            }
            markdown = markdown.concat(`${sections[repo][state][instance].bullet}\n`)
          }
        } else if (state === 'closed') {
          // same ugly hack as above, just using headings as a store that we can check against before writing the heading
          // write each bullet out
          for (const instance in sections[repo][state]) {
            if (!garbageCache.includes(`${heading} ${state}`)) {
              garbageCache.push(`${heading} ${state}`)
              markdown = markdown.concat(`\n${headers.closed}\n`)
            }
            markdown = markdown.concat(`${sections[repo][state][instance].bullet}\n`)
          }
        }
      }
    }
    typeMarkdown[type] = markdown
  }

  // generate the final string we're going to send back
  let output = ''
  output = output.concat(`${usableOptions.heading}\n`)
  output = output.concat(`${usableOptions.preface}\n`)

  // loop over the objects that we've generated
  for (const type in typeMarkdown) {
    output = output.concat(typeMarkdown[type])
  }

  // trim beginning/ending whitespace
  output = output.trim()

  return output
}

module.exports = generateGenericMarkdown
