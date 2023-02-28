---
sidebar_position: 2
---

# Cli Commands

## Getting Started

If we run the command help command:

```bash
npx @set-app/cli -h
```

We are going to find all the options available:

![readme](./assets/console-help.png)

:::info Peace of advice 😉
`Version` and `Help` commands are not intended to use with other options and commands
:::

## Type Command

The Tool was created to support 3 options: `React`, `React-Redux` and `Console`. `React` and `React-Redux` are implemented and `Console` will be release soon.

The default behaviour is `React`, if not `--type` is specified as you can see on [Basic Info](../basic-info.md)

`React-Redux`, option is covered on detail at [Other Projects Type](./other-projects-type.md)

## Description Command

This option sets **description** attribute on `package.json` that is used by the [readme generator](https://github.com/kefranabg/readme-md-generator) to fill the also the **Readme description** section.

:::tip In the future 🚀
This description is also going to be use for Github repository description
:::
