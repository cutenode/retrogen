# @retrogen/templates

Templates to convert data from `@retrogen/core` into human-readable markdown.

> Note: If you want to use these templates without having to write your own scripts, you'll want to take a look at [`@retrogen/generate`](../generate/)

# Usage

Basic example:

```js
// source: ./examples/default.js

const templates = require('@retrogen/templates')
const data = require('./data/example.json') // assuming you've got generated data in a file

async function useTemplate () {
  // use our basic template with the imported data
  const result = await templates('basic', data)

  // output the result
  console.log(result)
}

useTemplate()
```

An example with data from [`@retrogen/core`](../core/):

```js
// source: ./examples/usingCore.js

  const templates = require('@retrogen/templates')
const core = require('@retogen/core')
const { DateTime } = require('luxon')

async function useTemplate () {
  // set up relative dates
  const now = DateTime.now()
  const then = now.minus({ days: 7 })

  // convert them to usable ISO dates
  const dates = {
    start: then.toISODate(),
    end: now.toISODate()
  }

  // fetch and format our data from GitHub
  const data = await core('nodejs', dates)

  // use our basic template with the generated/formatted data
  const result = await templates('basic', data)

  // output the result
  console.log(result)
}

useTemplate()
```

Addtional examples can be found in [`./examples/`](./examples/).

### API

Assuming you've required this module as `templates`:

* `templates(template, data, options)`
  * `template` String (required) - Valid values:
    * `basic`: a basic template.
    * That's all for now. If you'd like to see another template, [PRs are welcome](https://github.com/cutenode/retrogen/pulls).
  * `data` Object (required):
    * This has to be output from [`@retrogen/core`](../core/).
  * `options` Object (optional):
    * `heading` String (optional): the heading to use for the output Markdown.
      * Default: `# Retrospective for ${data.meta.owner}`.
    * `preface` String (optional): the preface to use for the output Markdown.
      * Default: `Reporting on ${data.meta.issues.count} Issues from ${data.meta.issues.authors.count} authors, ${data.meta.pullRequests.count} Pull Requests from ${data.meta.pullRequests.authors.count} authors, and ${data.meta.discussions.count} Discussions from ${data.meta.discussions.authors.count} authors.`.
    * `includeDatesInHeadings` Boolean (optional): Boolean that tells the template whether to include the dates in the headings if both `options.start` and `options.end` have non-undefined values.
      * Default: `false`.
    * `start` String (optional): Start date of the range passed, in the format of `YYYY-MM-DD`.
    * `end` String (Optional): End date of the range passed, in the format of `YYYY-MM-DD`.

The goal with these API docs is to have a consistent style of documentation for each module in the monorepo. If there's inconsistencies, please feel free to open an issue to let the maintainers know.