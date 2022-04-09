const generateSectionHeader = require('./generateSectionHeader')

async function generateBody (repos) {
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
          if (!garbageCache.includes(`${heading} ${state} ${repos[repo][state][instance].type}`)) {
            garbageCache.push(`${heading} ${state} ${repos[repo][state][instance].type}`)
            if (repos[repo][state][instance].type === 'Issue') { // if the instance type is an issue, write the the appropriate header
              const localHeading = await generateSectionHeader(4, 'Issues', state)
              markdown = markdown.concat(localHeading)
            } else if (repos[repo][state][instance].type === 'PullRequest') { // if the instance type is a pull request, write the the appropriate header
              const localHeading = await generateSectionHeader(4, 'Pull Requests', state)
              markdown = markdown.concat(localHeading)
            } else if (repos[repo][state][instance].type === 'Discussion') { // if the instance type is a Discussion, write the the appropriate header
              const localHeading = await generateSectionHeader(4, 'Discussions', state)
              markdown = markdown.concat(localHeading)
            }
          }
          markdown = markdown.concat(`${repos[repo][state][instance].bullet}\n`)
        }
      } else if (state === 'merged') {
        for (const instance in repos[repo][state]) {
          // same ugly hack as above, just using headings as a store that we can check against before writing the heading
          // write each bullet out
          if (!garbageCache.includes(`${heading} ${state} ${repos[repo][state][instance].type}`)) { // caching repos[repo][state][instance].type here is important because it ensures that we're getting _out_ all the correct headers
            garbageCache.push(`${heading} ${state} ${repos[repo][state][instance].type}`)
            const localHeading = await generateSectionHeader(4, 'Pull Requests', state)
            markdown = markdown.concat(localHeading)
          }
          markdown = markdown.concat(`${repos[repo][state][instance].bullet}\n`)
        }
      } else if (state === 'closed') {
        for (const instance in repos[repo][state]) {
          // same ugly hack as above, just using headings as a store that we can check against before writing the heading
          // write each bullet out
          if (!garbageCache.includes(`${heading} ${state} ${repos[repo][state][instance].type}`)) { // same comment here about repos[repo][state][instance].type as above
            garbageCache.push(`${heading} ${state} ${repos[repo][state][instance].type}`)
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

  return markdown
}

module.exports = generateBody
