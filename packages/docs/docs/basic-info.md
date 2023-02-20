---
sidebar_position: 1
---

# Basic Info

Let's discover **SetApp in less than 5 minutes**.

## Getting Started

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new project

Please, Run:

```bash
npx @set-app/cli test-react
```

And just don't forget to replace _test-react_ for your project name.

The basic template will generate a new **react** project with:

- EsLint
- Prettier
- Typescript
- Vite
- Vitest
- React
- React-Query
- React-Router
- Happy-DOM
- Coverage-C8

:::info Have in mind 😉
The command also setups a GIT project with a `.gitignore` too.
:::

:::tip Full transparency
All preconfigure with the correspondant files and ready to be change as you may need
:::

## Example Site

The example project generated contains a basic example of some of the functionality that you could use and get inspire for your site:

- Error Boundary
- Vitest Unit Tests
- React Portals
- React Context
- React Router
- React-Query
- React-Router
- Controlled Forms
- Lazy Loading

Please, check it out [here](https://nodejs.org/en/download/)

## Your site commands

```bash
yarn dev
```

The `yarn dev` command serves your project through a development server, ready for you to view at [http://localhost:3000](http://localhost:3000)

```bash
yarn build
```

The `yarn build` command builds your project locally and leave you the posibility to deploy it in: [Netlify](http), [Vercel](http), etc.

```bash
yarn format
```

The `yarn format` command will format your **ts** and **tsx** according to prettier default configuration.

```bash
yarn lint
```

The `yarn lint` command outputs any Eslint error detected in your **ts** and **tsx** files in a friendly way.

```bash
yarn typecheck
```

The `yarn typecheck` command outputs any Typescript error detected in your **ts** and **tsx** files that not going to let you build your project.

```bash
yarn test
```

The `yarn test` command will run Vitest example tests or any tests that has the extension **.test.ts** or **.spec.ts**.

```bash
yarn test:coverage
```

The `yarn test:coverage` command runs Vitest coverage generator (**C8**) to generate a coverage report of your project.
