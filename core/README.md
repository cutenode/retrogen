# @retrogen/core

The core functionality of retrogen, a tool for generating retrospectives for GitHub activity.

## Prerequisites

To run this project, it's assumed that you have a GitHub Personal Access Token configured in your environment under the `GITHUB_TOKEN` environment variable. You can either do this manually, automatically with your own tooling, or by adding an appropriately configured `.env` file to your project.

## Usage

Basic usage:

```js
// source: ./examples/default.js

const core = require('@retrogen/core')

async function generate () {
  const dates = {
    start: '2022-01-01',
    end: '2022-01-31'
  }

  const data = await core('nodejs', dates)

  console.log(JSON.stringify(data, null, 2))
}

generate()
```

Addtional examples can be found in [`./examples/`](./examples/).

## API 

Assuming you've required this module as `core`:

* `core(owner, dates, options)`
  * `owner` String (required): The GitHub name of the owner of the repository. This can be a user or an organization.
  * `dates` Object (required):
    * `start` String (required): The start date of the query we'll send to GitHub. Should be formatted as `YYYY-MM-DD`.
      * Example: `'2022-01-01'`
    * `end` String (required): The end date of the query we'll send to GitHub.Should be formatted as `YYYY-MM-DD`.
      * Example: `'2022-01-31'`
  * `options` Object (optional):
    * `sort` String (optional): The sort order of the query we'll send to GitHub. You can find the valid options on [GitHub's Docs](https://docs.github.com/en/enterprise-cloud@latest/search-github/getting-started-with-searching-on-github/sorting-search-results).
      * Examples: `stars`, `interactions`, `updated`
      * Default: `'updated'`
    * `per_page` Number (optional): The number of results to return per page.
      * Default: `100`

The goal with these API docs is to have a consistent style of documentation for each module in the monorepo. If there's inconsistencies, please feel free to open an issue to let the maintainers know