---
sidebar_position: 3
---

# Upcoming Features

:::info Please remember 🙏🏻
It's a freshly new tool coming out, so we have a lot of opportunities to improve!
:::

In our head right now, we have a list of features coming out soon:

- [Github Action Workflow](#github-action-workflow)
- [E2E Cypress Generation](#e2e-cypress-generation)
- [Console Project Generation](#console-project-generation)
- [Firebase Project Generation](#firebase-project-generation)

## Github Action Workflow

We already have the **github actions** neccesary for doing this when we deploy to [Netlify](https://www.netlify.com) the examples, You are able to watch the final result in the projects [React](https://stupendous-meerkat-980ca8.netlify.app) and [React-Redux](https://jocular-kringle-b9193b.netlify.app).

So, by default the `.github/workflows` folder would contain the correct action to do so. There's going to be an option to not doing so,
with the flag: `--no-deploy`

:::tip Just a thought 🧠
Just as a reminder the presence of the flag `--no-deploy`, only affects the **github action workflow** generation, no other feature is affected or disable with the use!
:::

## E2E Cypress Generation

[Cypress E2E](https://www.cypress.io) are going to be used to check the stability and integrity of changes and dependency updates on the example projects.
Based on that, we could extract the dependencies and the process installation need it and added to the _projects generated_ with the **cli**.

So, by default the [Cypress E2E](https://www.cypress.io) are going to be generated but if you don't need this, you could disable so using the flag: `--no-e2e`

## Console Project Generation

By the lessons learning created this **cli**, the core process configuration and installation are going to be extracted to generate a new type of project,
available on the **cli** with the option `-t console` or `--type console`

:::tip Just a thought 🧠
The previous features (**github project generation** and **github action workflow**) are going to be available and present for this new type of project
:::

## Firebase Project Generation

One of the most interesting new features is the generation and integration with the [firebase cloud](https://firebase.google.com).
When this config is activated the _workflow_ and even the _file project structre_ would be adapted to support the **firebase projects**.
It's going to make possible that our projects have [authentication](https://firebase.google.com/products/auth), [storage](https://firebase.google.com/products/storage) and a ton more features by the hand of [firebase](https://firebase.google.com)

This behaviour must be activated using the flag `--firebase`

:::danger
For now this will be not present in the `console` projects and if we try, we are going to receive an error
:::
