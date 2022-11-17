// Most of the remark ecosystem is ESM which means that packages like remark-gfm currently don’t work out of the box with Gatsby.
// So wrap the plugin with an async function.
// (https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxoptions)
const wrapESMPlugin = (name) =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name)
      const plugin = mod.default(opts)
      return plugin(...args)
    }
  }

module.exports = {
  siteMetadata: {
    title: "zzzkan blog",
    siteUrl: "https://github.com/zzzkan",
    description: `@zzzkan/gatsby-theme-blog example.`,
    author: "zzzkan",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "content/posts",
        name: "content/posts",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650,
              linkImagesToOriginal: false,
              backgroundColor: "transparent",
              withWebp: true,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [require("remark-gfm")],
          rehypePlugins: [
            wrapESMPlugin("rehype-external-links"),
            wrapESMPlugin("rehype-slug"),
            wrapESMPlugin("rehype-autolink-headings"),
          ],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
  ],
}
