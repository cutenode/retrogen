async function generateRepoInformationFromData (data) {
  const repos = {}

  for (const type in data) {
    if (type === 'issues' || type === 'pullRequests' || type === 'discussions') {
      data[type].forEach(instance => {
      // generate the bullet, since we're always going to use it
        const bullet = `- ${instance.meta.title} ([#${instance.meta.number}](${instance.meta.url}))`

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

  return repos
}

module.exports = generateRepoInformationFromData
