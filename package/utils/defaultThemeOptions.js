module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || "/"
  const contentPath = themeOptions.contentPath || "content/posts"
  const postImageMaxWidth = themeOptions.postImageMaxWidth || 960
  const featuredImageAspectRatio =
    themeOptions.featuredImageAspectRatio || 1.7777
  const dateFormatString = themeOptions.dateFormatString || "YYYY-MM-DD"
  const shikiTheme = themeOptions.shikiTheme || "one-dark-pro"
  const links = themeOptions.links || []

  return {
    basePath,
    contentPath,
    postImageMaxWidth,
    featuredImageAspectRatio,
    dateFormatString,
    shikiTheme,
    links,
  }
}
