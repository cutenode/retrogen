require('dotenv').config()
const { Octokit } = require('@octokit/rest')
const { DateTime } = require('luxon')

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

async function generate (options = {}) {
  const usableOptions = {
    owner: options.org,
    sort: options.sort || 'updated',
    per_page: 100
  }
  const millisAgoToCheck = options.millisAgoToCheck || -1000 * 60 * 60 * 24 * 7 // defaults to the past week. needs to be negative.
  const data = []

  const repos = await octokit.paginate(octokit.rest.repos.listForOrg, {
    org: usableOptions.owner,
    sort: usableOptions.sort,
    per_page: usableOptions.per_page
  })

  for (const repo in repos) {
    const useful = {
      name: repos[repo].name,
      fullName: repos[repo].full_name,
      url: repos[repo].html_url,
      description: repos[repo].description,
      updated: repos[repo].updated_at,
      language: repos[repo].language,
      topics: repos[repo].topics,
      stars: repos[repo].stargazers_count,
      prs: [],
      releases: [],
      tags: [],
      codeFrequencyStats: []
    }

    // limit our additional data to only repos that have been updated since millisAgoToCheck
    if (DateTime.fromISO(useful.updated).diffNow().toMillis() > millisAgoToCheck) {
      const pullrequests = await getPRs(usableOptions, repos, repo, millisAgoToCheck)
      useful.prs.push(pullrequests)
      data.push(useful)
    }
  }

  return data
}

async function getPRs (usableOptions, repos, repo, millisAgoToCheck) {
  const initialPRs = await octokit.rest.pulls.list({
    owner: usableOptions.owner,
    repo: repos[repo].name,
    sort: usableOptions.sort,
    per_page: usableOptions.per_page
  })

  const filteredPRs = []

  for (const pr in initialPRs.data) {
    if (DateTime.fromISO(initialPRs.data[pr].updated_at).diffNow().toMillis() > millisAgoToCheck) {
      filteredPRs.push({
        id: initialPRs.data[pr].id,
        url: initialPRs.data[pr].html_url,
        diff: initialPRs.data[pr].diff_url,
        patch: initialPRs.data[pr].patch_url,
        number: initialPRs.data[pr].number,
        state: initialPRs.data[pr].state,
        locked: initialPRs.data[pr].locked,
        title: initialPRs.data[pr].title,
        user: {
          login: initialPRs.data[pr].user.login,
          url: initialPRs.data[pr].user.html_url,
          type: initialPRs.data[pr].user.type
        },
        created: initialPRs.data[pr].created_at,
        updated: initialPRs.data[pr].updated_at,
        closed: initialPRs.data[pr].closed_at,
        merged: initialPRs.data[pr].merged_at,
        assignees: initialPRs.data[pr].assignees,
        requested_reviewers: initialPRs.data[pr].requested_reviewers,
        requested_teams: initialPRs.data[pr].requested_teams,
        milestone: initialPRs.data[pr].milestone,
        draft: initialPRs.data[pr].draft,
        authorAssociation: initialPRs.data[pr].author_association
      })
    }
  }

  return filteredPRs
}

async function lol () {
  const data = await generate({ org: 'nodejs' })
  console.log(JSON.stringify(data, null, 2))
}

lol()
