module.exports = (themeOptions) => {
  const lang = themeOptions.lang || "en"
  const basePath = themeOptions.basePath || "/"
  const contentPath = themeOptions.contentPath || "content/posts"
  const postImageMaxWidth = themeOptions.postImageMaxWidth || 960
  const featuredImageAspectRatio =
    themeOptions.featuredImageAspectRatio || 1.7777
  const dateFormatString = themeOptions.dateFormatString || "YYYY-MM-DD"
  const postsLimit = themeOptions.postsLimit || 30
  const relatedPostsLimit = themeOptions.relatedPostsLimit || 6
  const shikiTheme = themeOptions.shikiTheme || "github-light"
  const links = themeOptions.links || []

  return {
    lang,
    basePath,
    contentPath,
    postImageMaxWidth,
    featuredImageAspectRatio,
    dateFormatString,
    postsLimit,
    relatedPostsLimit,
    shikiTheme,
    links,
  }
}
