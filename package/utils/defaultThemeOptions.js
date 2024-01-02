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
  const shikiTheme = themeOptions.shikiTheme || "dracula"
  const links = themeOptions.links || []
  const wordsPerMinute = themeOptions.wordsPerMinute || 300

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
    wordsPerMinute,
  }
}
