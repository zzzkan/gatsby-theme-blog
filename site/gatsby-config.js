module.exports = {
  siteMetadata: {
    title: "zzzkan blog",
    siteUrl: "https://zzzkan-gatsby-theme-blog.netlify.app/",
    description: "gatsby-theme-blog by @zzzkan.",
    author: "zzzkan",
    authorUrl: "https://zzzkan.me/",
    publicationYear: 2023,
    imageUrl: "https://zzzkan-gatsby-theme-blog.netlify.app/banner.png",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "@zzzkan/gatsby-theme-blog",
      options: {
        lang: "ja",
        basePath: "/base",
        contentPath: "contents/entries",
        postImageMaxWidth: 480,
        featuredImageAspectRatio: 2,
        dateFormatString: "MMMM DD, YYYY",
        postsLimit: 3,
        relatedPostsLimit: 2,
        shikiTheme: "dracula",
        links: [
          {
            name: "Profile",
            url: "/",
          },
          {
            name: "RSS",
            url: "/",
          },
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
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
      },
    },
  ],
}
