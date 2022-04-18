# retrogen

A tool for generating retrospectives for GitHub activity.

### Pacakges

- [@retrogen/core](./core/): The core functionality of retrogen.
- [@retrogen/generate](./generate/): A tool that generates Markdown retros for GitHub users and organizations. This is the all-in-one solution for retrogen that incorporates both the [`@retrogen/core`](./core/) and [`@retrogen/templates`](./templates/) modules.
- [@retrogen/templates](./templates/): Templates to convert data from [`@retrogen/core`](./core/) into human-readable markdown.

### Contributing and Development.

To contribute, you'll need to get a GitHub Personal Access Token and add it to a `.env` file in eacch workspace that you're going to work in. `dotenv` doesn't currently support workspaces, so you'll need to do work from each workspace rather than from the root of the project.

### Scripts

As a monorepo, every package has the same set of sub-scripts. This enables us to alias those to monorepo-level scripts. The following aliases are provided:

- `lint`: runs each package's linter.
- `lint:fix`: runs each package's linter and fix any issues that can be automatically fixed.
- `test`: runs each package's tests. Currently there are no tests, but the commands and devDeps are set up.
- `coverage`: runs each package's test coverage. Since there are currently no tests, again this will do nothing despite being properly configured.
- `examples`: runs each package's examples and logs the raw output.
- `examples:output`: runs each package's examples and writes the output to a file.
