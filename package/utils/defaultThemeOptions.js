module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || "/"
  const contentPath = themeOptions.contentPath || "content/posts"
  const postImageMaxWidth = themeOptions.postImageMaxWidth || 960
  const featuredImageAspectRatio =
    themeOptions.featuredImageAspectRatio || 1.7777
  const dateFormatString = themeOptions.dateFormatString || "YYYY-MM-DD"
  const relatedPostsLimit = themeOptions.relatedPostsLimit || 6
  const shikiLightTheme = themeOptions.shikiLightTheme || "github-light"
  const shikiDarkTheme = themeOptions.shikiDarkTheme || "github-dark"
  const links = themeOptions.links || []

  return {
    basePath,
    contentPath,
    postImageMaxWidth,
    featuredImageAspectRatio,
    dateFormatString,
    relatedPostsLimit,
    shikiLightTheme,
    shikiDarkTheme,
    links,
  }
}
