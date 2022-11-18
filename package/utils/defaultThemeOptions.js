module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || "/"
  const contentPath = themeOptions.contentPath || "content/posts"
  const imageMaxWidth = themeOptions.imageMaxWidth || 960
  const aspectRatio = themeOptions.imageMaxWidth || 1.7777
  const formatString = themeOptions.formatString || "YYYY-MM-DD"
  const links = themeOptions.links || []

  return {
    basePath,
    contentPath,
    imageMaxWidth,
    aspectRatio,
    formatString,
    links,
  }
}
