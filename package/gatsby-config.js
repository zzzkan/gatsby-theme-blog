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

const defaultThemeOptions = require("./utils/defaultThemeOptions")

module.exports = (themeOptions) => {
  const { contentPath, postImageMaxWidth, shikiTheme } =
    defaultThemeOptions(themeOptions)
  return {
    siteMetadata: {
      title: "@zzzkan/gatsby-theme-blog",
      siteUrl: "http://localhost:9000/",
      description: "@zzzkan/gatsby-theme-blog example.",
      author: "zzzkan",
      publicationYear: 2022,
      imageUrl: "http://localhost:9000/og-image.png",
    },
    graphqlTypegen: true,
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: contentPath,
          name: contentPath,
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
                maxWidth: postImageMaxWidth,
                linkImagesToOriginal: false,
                backgroundColor: "transparent",
                withWebp: true,
              },
            },
          ],
          mdxOptions: {
            remarkPlugins: [require("remark-gfm")],
            rehypePlugins: [
              wrapESMPlugin("rehype-slug"),
              [
                wrapESMPlugin("rehype-autolink-headings"),
                {
                  behavior: "append",
                  properties: {
                    className: "anchor",
                    ariaHidden: true,
                    tabIndex: -1,
                  },
                  content: [
                    {
                      type: "element",
                      tagName: "span",
                      children: [
                        {
                          type: "text",
                          value: "#",
                        },
                      ],
                    },
                  ],
                },
              ],
              [
                wrapESMPlugin("rehype-pretty-code"),
                {
                  theme: shikiTheme,
                  keepBackground: true,
                  onVisitLine(node) {
                    if (node.children.length === 0) {
                      node.children = [{ type: "text", value: " " }]
                    }
                  },
                  onVisitHighlightedLine(node) {
                    node.properties.className.push("highlighted-line")
                  },
                  onVisitHighlightedWord(node) {
                    node.properties.className = ["highlighted-word"]
                  },
                },
              ],
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
}
