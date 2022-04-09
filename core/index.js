require('dotenv').config()
let { graphql } = require('@octokit/graphql')
const query = require('./queries/query')
const returnUsable = require('./util/returnUsable')

graphql = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`
  }
})

async function generate (owner, dates = {}, options = {}) {
  if (!owner) throw new Error('No owner provided.')

  const usableOptions = {
    sort: options.sort ?? 'updated', // defaults to sorting by most recent
    per_page: options.per_page ?? 100 // defaults to max
  }

  const usableDates = {
    start: dates.start,
    end: dates.end
  }

  // the query we pass to GitHub. This includes both the owner and the time range we want to search.
  const generatedQuery = `org:${owner} updated:${usableDates.start}..${usableDates.end}`
  const data = {
    meta: { // general information that we'll want to use in multiple places
      issues: {
        count: 0,
        authors: {
          count: 0,
          list: []
        }
      },
      pullRequests: {
        count: 0,
        authors: {
          count: 0,
          list: []
        }
      },
      discussions: {
        count: 0,
        authors: {
          count: 0,
          list: []
        }
      },
      owner: ''
    },
    issues: [], // array of issues that exist according to the query
    pullRequests: [], // array of PRs that exist according to the query
    discussions: [] // array of discussions that exist according to the query
  }
  const queryOptions = { // variables that we pass to coreQuery
    per_page: usableOptions.per_page,
    generatedQuery: generatedQuery
  }

  // get our information out of GitHub, using the require'd `query` as our query.
  const results = await graphql(query, queryOptions)

  for (const issue in results.issuesPrs.nodes) {
    // generate a usable object for each issue/PR
    const usable = await returnUsable(results.issuesPrs.nodes[issue])
    // set the owner of the org for meta use
    if (data.meta.owner === '') {
      data.meta.owner = results.issuesPrs.nodes[issue].repository.owner.login
    }

    if (results.issuesPrs.nodes[issue].__typename === 'Issue') {
      // increment the count of unique authors
      if (!data.meta.issues.authors.list.includes(usable.author.username)) {
        data.meta.issues.authors.list.push(usable.author.username)
        data.meta.issues.authors.count++
      }
      // increment the total counter by one for every issue that we find
      data.meta.issues.count++
      // populate the appropriate array with the usable object
      data.issues.push(usable)
    }

    if (results.issuesPrs.nodes[issue].__typename === 'PullRequest') {
      // increment the count of unique authors
      if (!data.meta.pullRequests.authors.list.includes(usable.author.username)) {
        data.meta.pullRequests.authors.list.push(usable.author.username)
        data.meta.pullRequests.authors.count++
      }
      // increment the total counter by one for every issue that we find
      data.meta.pullRequests.count++
      // populate the appropriate array with the usable object
      data.pullRequests.push(usable)
    }
  }

  for (const discussion in results.discussions.nodes) {
    const usable = await returnUsable(results.discussions.nodes[discussion], 'Discussion')

    // set the owner of the org for meta use
    if (data.meta.owner === '') {
      data.meta.owner = results.discussions.nodes[discussion].repository.owner.login
    }

    // increment the count of unique authors
    if (!data.meta.discussions.authors.list.includes(usable.author.username)) {
      data.meta.discussions.authors.list.push(usable.author.username)
      data.meta.discussions.authors.count++
    }
    // increment the total counter by one for every issue that we find
    data.meta.discussions.count++
    // populate the appropriate array with the usable object
    data.discussions.push(usable)
  }
  return data
}

module.exports = generate
