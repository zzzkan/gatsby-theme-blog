module.exports = {
  siteMetadata: {
    title: "zzzkan blog",
    siteUrl: "http://localhost:9000/",
    description: "gatsby-theme-blog by @zzzkan.",
    author: "zzzkan",
    publicationYear: 2023,
    image: "banner.jpg",
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
        shikiLightTheme: "dracula",
        shikiDarkTheme: "dracula",
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
  ],
}
