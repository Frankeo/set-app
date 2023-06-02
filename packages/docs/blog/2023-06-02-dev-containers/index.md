---
slug: dev-containers
title: Dev Containers and my "local" approach
authors: fran
tags: [dev-containers, docker, vscode]
---

## DevContainers

[DevContainers](https://code.visualstudio.com/docs/devcontainers/containers) is a technology based on **Docker** for develop inside local containers and as a big benefit we are isolated and we don't need to polute our primary OS with programming tools.

**Github** is also compatible with this technology and base on **DevContainers** it is able to generate [Github Codespaces](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers) where you can work from your browser without the necesity of installing anything!

:::info
**VSCode** has plugins related to this so work with a container instead of local environment would be seemless
:::

## My Approach

Base on this technology with a little bit of **`Docker`**, **`Scripting`** and **`Set-App`**, I'll manage to generate this development flow.

### Pre-requisites

- [Visual Studio Code](https://code.visualstudio.com) with the plugin for [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

- [Docker Engine](https://docs.docker.com/engine/install/)

### Scripting

You would need to create a simple file with:

BASH **(Linux/Mac)**

```bash
docker volume create --name projects --opt type=none --opt device='<LOCAL-PATH>' --opt o=bind
docker pull franciscomoreno1/set-app:latest
docker run -it -v projects:/projects -w /projects franciscomoreno1/set-app:latest /bin/sh
```

Replace `<LOCAL-PATH>` with the path that you want to contain your projects in your local filesystem

**Execute one time** the file and you would have prompt a console where to execute your `set-app` command:

```bash
npx @set-app/cli '<PROJECT-NAME>'
```

The first time is going to download the tool in the container but the following times just restarting the container would be enoght.

:::tip Dev Container configuration 😎
A set of **VSCode** plugins are already preconfigured for the use, but you could add new ones and just `Rebuild the DevContainer`
:::
