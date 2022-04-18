# retrogen

A tool for generating retrospectives for GitHub activity.

### Pacakges

- [@retrogen/core](./core/): The core functionality of retrogen.
- [@retrogen/generate](./generate/): A tool that generates Markdown retros for GitHub users and organizaations. This is the all-in-one solution for retrogen that incorporates both the [`@retrogen/core`](./core/) and [`@retrogen/templates`](./templates/) modules.
- [@retrogen/templates](./templates/): Templates to convert data from [`@retrogen/core`](./core/) into human-readable markdown.

### Contributing and Development.

To contribute, you'll need to get a GitHub Personal Access Token and add it to a `.env` file in eacch workspace that you're going to work in. `dotenv` doesn't currently support workspaces, so you'll need to do work from each workspace rather than from the root of the project.