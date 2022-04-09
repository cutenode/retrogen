# @retrogen/generate

A tool that generates Markdown retros for GitHub users and organizaations. This is the all-in-one solution for retrogen that incorporates both the [`@retrogen/core`](../core/) and [`@retrogen/templates`](../templates/) modules.

## Prerequisites

To run this project, it's assumed that you have a GitHub Personal Access Token configured in your environment under the `GITHUB_TOKEN` environment variable. You can either do this manually, automatically with your own tooling, or by adding an appropriately configured `.env` file to your project.

## Usage

```js
// source: ./examples/default.js

const generate = require('@retrogen/generate')

async function markdown () {
  // the date range we want to get information for
  const dates = {
    start: '2022-03-27',
    end: '2022-04-02'
  }

  // this will generate markdown for the Node.js GitHub organization that includes data for Issues, PRs, and Discussions from 2022-03-27 to 2022-04-02
  await generate('nodejs', dates, { log: true })
}

markdown()
```

### API

Assuming you've required this module as `generate`:

* `owner` String (required): The GitHub name of the owner of the repository. This can be a user or an organization.
* `dates` Object (required):
  * `start` String (required): The start date of the query we'll send to GitHub. Should be formatted as `YYYY-MM-DD`.
    - Example: `'2022-01-01'`
  * `end` String (required): The end date of the query we'll send to GitHub.Should be formatted as `YYYY-MM-DD`.
    - Example: `'2022-01-31'`
* `options` Object (optional):
  * `sort` String (optional): The sort order of the query we'll send to GitHub. You can find the valid options on [GitHub's Docs](https://docs.github.com/en/enterprise-cloud@latest/search-github/getting-started-with-searching-on-github/sorting-search-results).
    * Examples: `stars`, `interactions`, `updated`
    * Default: `'updated'`
  * `per_page` Number (optional): The number of results to return per page.
    * Default: `100`
  * `heading` String (optional): the heading to use for the output Markdown.
    * Default: `# Retrospective for ${data.meta.owner}`.
  * `preface` String (optional): the preface to use for the output Markdown.
    * Default: `Reporting on ${data.meta.issues.count} Issues from ${data.meta.issues.authors.count} authors, ${data.meta.pullRequests.count} Pull Requests from ${data.meta.pullRequests.authors.count} authors, and ${data.meta.discussions.count} Discussions from ${data.meta.discussions.authors.count} authors.`.
  * `headerDates` Boolean (optional): Boolean that tells the template whether to include the dates in the headings if both `options.start` and `options.end` have non-undefined values.
    * Default: `false`.


The goal with these API docs is to have a consistent style of documentation for each module in the monorepo. If there's inconsistencies, please feel free to open an issue to let the maintainers know.