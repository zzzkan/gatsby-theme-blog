import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "@zzzkan/gatsby-theme-blog",
      options: {},
    },
  ],
}

export default config
