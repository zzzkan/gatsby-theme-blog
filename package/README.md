<h1 align="center">
  @zzzkan/gatsby-theme-blog
</h1>
<p align="center">
  <a href="https://github.com/zzzkan/gatsby-theme-blog/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license" />
  </a>
  <a href="https://badge.fury.io/js/@zzzkan%2Fgatsby-theme-blog">
    <img src="https://badge.fury.io/js/@zzzkan%2Fgatsby-theme-blog.svg" alt="npm version" height="18">
  </a>
</p>
<p align="center">Gatsby theme for a simple blog</p>

<!--
## Demo
TODO : Starter infomation
-->

## Features

- MDX
- [Chakra UI](https://github.com/chakra-ui/chakra-ui) theming
- Light mode / Dark mode
- Code highlighting with [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/)
- Tags
- Related posts based on simple tag matching
- Psagination
- Social buttons (GitHub, Twitter, RSS)

## Installation

<!--
### For a new site

TODO : Starter infomation

### For an existing site
-->

Install the blog theme

```sh
npm install @zzzkan/gatsby-theme-blog
```

and then add the configuration to your `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "@zzzkan/gatsby-theme-blog",
      options: {
        // options
      },
    },
  ],
}
```

## Configuration

### Theme options

Available theme options are:

| Key                        | Default value   | Description                                                                            |
| -------------------------- | --------------- | -------------------------------------------------------------------------------------- |
| `lang`                     | `en`            | `lang` global attribute                                                                |
| `basePath`                 | `/`             | Root url for all blog posts                                                            |
| `contentPath`              | `content/posts` | Location of blog posts                                                                 |
| `postImageMaxWidth`        | `960`           | Max width of images in your blog posts                                                 |
| `featuredImageAspectRatio` | `1.7777`        | Aspect ratio of featured images                                                        |
| `dateFormatString`         | `YYYY-MM-DD`    | Date format                                                                            |
| `postsLimit`               | `30`            | Max number of posts per page                                                           |
| `relatedPostsLimit`        | `6`             | Max number of posts in related posts                                                   |
| `shikiLightTheme`          | `github-light`  | [Shiki theme](https://github.com/shikijs/shiki/blob/main/docs/themes.md) on light mode |
| `shikiDarkTheme`           | `github-dark`   | [Shiki theme](https://github.com/shikijs/shiki/blob/main/docs/themes.md) on dark mode  |
| `links`                    | `[]`            | Links to your external sites                                                           |

A example is shown below.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "@zzzkan/gatsby-theme-blog",
      options: {
        lang: "en",
        basePath: "/blog",
        contentPath: "contents/entries",
        postImageMaxWidth: 1380,
        featuredImageAspectRatio: 2,
        dateFormatString: "MMMM DD, YYYY",
        postsLimit: 10,
        relatedPostsLimit: 6,
        shikiLightTheme: "github-light",
        shikiDarkTheme: "github-dark",
        links: [
          {
            name: "GitHub",
            url: "https://github.com/zzzkan",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/_zzzkan",
          },
        ],
      },
    },
  ],
}
```

### Site metadata

There are items that you can customize via the `siteMetadata` object in `gatsby-config.js`. These are used for headers, footers, SEO, etc.

| Key               | Description                                      |
| ----------------- | ------------------------------------------------ |
| `title`           | Blog title                                       |
| `siteUrl`         | Blog site url                                    |
| `description`     | Blog description                                 |
| `author`          | Author                                           |
| `publicationYear` | Blog publication year                            |
| `image`           | og:image (must be placed inside `static` folder) |

A example is shown below.

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "zzzkan blog",
    siteUrl: "https://zzzkan-gatsby-theme-blog.netlify.app/",
    description: "gatsby-theme-blog by @zzzkan.",
    author: "zzzkan",
    publicationYear: 2023,
    image: "banner.png",
  },
}
```

### Chakra UI theme

This blog theme is based on Chakra UI. You can easily change the site color scheme, or other styles by [shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) Chakra UI theme (`/src/@chakra-ui/gatsby-plugin/theme.ts`).

A example is shown below.

```ts
// /src/@chakra-ui/gatsby-plugin/theme.ts
import { extendTheme, theme as baseTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    brand: baseTheme.colors.blue,
    base: baseTheme.colors.gray,
  },
  semanticTokens: {
    colors: {
      tint: { default: "brand.700", _dark: "brand.200" },
      primaryText: { default: "base.800", _dark: "base.100" },
      secondaryText: { default: "base.600", _dark: "base.400" },
      onTintText: { default: "white", _dark: "base.900" },
      primaryBackground: { default: "white", _dark: "base.900" },
      secondaryBackground: {
        default: "RGBA(0, 0, 0, 0.02)",
        _dark: "RGBA(255, 255, 255, 0.02)",
      },
      codeBackground: {
        default: "RGBA(0, 0, 0, 0.02)",
        _dark: "RGBA(255, 255, 255, 0.02)",
      },
      highlightBackground: {
        default: "RGBA(0, 0, 0, 0.03)",
        _dark: "RGBA(255, 255, 255, 0.04)",
      },
    },
  },
  styles: {
    global: {
      html: {
        scrollPaddingTop: "12",
        scrollbarGutter: "stable",
      },
    },
  },
})

export default theme
```

## Adding content

### Post

New blog posts can be created by adding MDX files in `contentPath`, and add the frontmatter.

#### Frontmatter

You can set up blog post metadata in frontmatter.

| Key                | Description                           |
| ------------------ | ------------------------------------- |
| `slug`             | Slug                                  |
| `title`            | Title                                 |
| `publishedDate`    | Published date                        |
| `updatedDate`      | (optional) Updated date               |
| `featuredImage`    | (optional) Featured image             |
| `featuredImageAlt` | (optional) Featured image alternative |
| `tags`             | (optional) Tags                       |
| `description`      | (optional) Description                |

A example is shown below.

```mdx
---
slug: ipsum-consetetur
title: Ipsum consetetur nulla facilisi eos
publishedDate: 2022-10-01
updatedDate: 2022-10-02
featuredImage: ./featuredImage.png
featuredImageAlt: "featured image"
tags:
  - sample
  - ipsum
  - consetetur
  - nulla
description: Ipsum consetetur nulla facilisi eos
---
```

#### Code highlighting

This blog theme uses [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/) for code highlighting. It also supports highlighting and showing line numbers by metastrings.

A example is shown below.

````mdx
```jsx showLineNumbers {1,5} /div/
import { useFloating } from "@floating-ui/react-dom"
function MyComponent() {
  const { x, y, reference, floating } = useFloating()
  return (
    <>
      <div ref={reference} />
      <div ref={floating} />
    </>
  )
}
```
````

Inline codes can also be highlighted.

```mdx
justo autem `import { useFloating } from "@floating-ui/react-dom"{:jsx}` amet justo kasd nonumy.
```

### Page

New pages can be created by adding files to `/src/pages`. You can import `@zzzkan/gatsby-theme-blog/src/components/Layout` if you want to apply the same layout as the theme.

A example is shown below.

```jsx
// /src/pages/index.tsx
import React from "react"
import { Heading } from "@chakra-ui/react"
import { Layout } from "@zzzkan/gatsby-theme-blog/src/components/Layout"

const Home: React.FC = () => {
  return (
    <Layout>
      <Heading as={"h1"} size={"xl"} marginBottom={3}>
        Home
      </Heading>
    </Layout>
  )
}

export default Home
```

## Shadowing

"Shadowing" will be useful if you want to customize the theme. For more information, please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/).

## Contact me

Thanks for your interest in my project. Don't hesitate to contact me via [Twitter](https://twitter.com/_zzzkan) if you need anything.
