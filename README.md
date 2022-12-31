<h1 align="center">
   Gatsby theme for a simple blog
</h1>
<p align="center">
  <a href="https://github.com/zzzkan/gatsby-theme-blog/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license" />
  </a>
  <a href="https://github.com/zzzkan/gatsby-theme-blog/actions/workflows/ci.yml">
    <img src="https://github.com/zzzkan/gatsby-theme-blog/actions/workflows/ci.yml/badge.svg" alt="CI" />
  </a>
  <a href="https://github.com/zzzkan/gatsby-theme-blog/actions/workflows/codeql.yml">
    <img src="https://github.com/zzzkan/gatsby-theme-blog/actions/workflows/codeql.yml/badge.svg" alt="CodeQL" />
  </a>
  <a href="https://github.com/zzzkan/gatsby-theme-blog/actions/workflows/netlify.yml">
    <img src="https://github.com/zzzkan/gatsby-theme-blog/actions/workflows/netlify.yml/badge.svg?branch=main" alt="Netlify" />
  </a>
</p>

## Features

See the readme [@zzzkan/gatsby-theme-blog](https://github.com/zzzkan/gatsby-theme-blog/tree/main/package#readme).

## Getting Started

You can use [@zzzkan/gatsby-starter-blog](https://github.com/zzzkan/gatsby-starter-blog#readme) if you are creating a new site and want to use the theme.

```sh
npx gatsby new gatsby-starter-blog https://github.com/zzzkan/gatsby-starter-blog
```

## Contributing

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 18) --- because of use Gatsby v5
- [Yarn](https://yarnpkg.com/) --- because of use yarn workspace

### Local Development

Install dependencies and start development server.

```sh
yarn
yarn workspace site develop
```

### Testing

Unit tests:

```sh
yarn test
```

E2E tests (build required):

```sh
yarn workspace site build
yarn test:e2e
```

### Test site

The test site for this project will be deployed in [netlify](https://app.netlify.com/sites/zzzkan-gatsby-theme-blog/deploys).

## Contact me

Thanks for your interest in my project. Don't hesitate to contact me via [Twitter](https://twitter.com/_zzzkan) if you need anything.
