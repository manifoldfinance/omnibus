# [omnibus](https://docs.manifoldfinance.com)

[![Release](https://github.com/manifoldfinance/omnibus/actions/workflows/release.yml/badge.svg)](https://github.com/manifoldfinance/omnibus/actions/workflows/release.yml)
[![CI](https://github.com/manifoldfinance/omnibus/actions/workflows/ci.yml/badge.svg)](https://github.com/manifoldfinance/omnibus/actions/workflows/ci.yml)

## Overview

v2 Documentation and Community Hub Webpage for Manifold Finance

## Admonitions

Admonitions, also known as call-outs, are a way of including side content without significantly interrupting the
document flow. Omnibus provides several different types of admonitions and allows for the inclusion and nesting of
arbitrary content.

| Id  | Admonitions      |
| --- | ---------------- |
| 🔍  | note             |
| ❌  | fatal            |
| 🚨  | warning          |
| 🔮  | interrogative    |
| 🚧  | work-in-progress |
| 🧰  | toolkit          |
| 📖  | reading          |
| 🎯  | metrics          |
| 🔐  | security         |
| 🛠   | configuration    |

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

## License

Apache-2.0 / CC-2.5-NC
