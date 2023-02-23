---
sidebar_position: 1
---

# Basic Info

Let's discover **SetApp in less than 5 minutes**.

## Getting Started

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

- [Git](https://git-scm.com/downloads) basic features are used so any version since 2015 are recommended

## Generate a new project

Please, Run:

```bash
npx @set-app/cli test-react
```

And just don't forget to replace `test-react` for your project name.

The basic template will generate a new **react** project with:

- [EsLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Typescript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Vitest](https://vitest.dev)
- [React](https://reactjs.org)
- [React-Query](https://react-query-v3.tanstack.com)
- [React-Router](https://reactrouter.com/en/main)
- [Happy-DOM](https://github.com/capricorn86/happy-dom)
- [Coverage-C8](https://www.npmjs.com/package/@vitest/coverage-c8)

:::info Have in mind 😉
The command also setups a GIT project with a `.gitignore` too. And of course, a beautiful `README.md`
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

Please, check it out [here](https://stupendous-meerkat-980ca8.netlify.app)

## Your site commands

```bash
yarn dev
```

The `yarn dev` command serves your project through a development server, ready for you to view at [http://localhost:5173](http://localhost:5173)

```bash
yarn build
```

The `yarn build` command builds your project locally and leave you the posibility to deploy it in: [Netlify](https://www.netlify.com), [Vercel](https://vercel.com), etc.

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
