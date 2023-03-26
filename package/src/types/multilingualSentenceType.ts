export type multilingualSentenceType = {
  readonly getFeaturedImageAlt: () => string
  readonly getFeaturedImageLinkAlt: (str: string) => string
  readonly getToggleColorModeLabel: () => string
  readonly getAllPostsText: () => string
  readonly getPreviousPageText: () => string
  readonly getNextPageText: () => string
  readonly getRelatedPostsText: () => string
  readonly getPageCountText: (count: number) => string
  readonly getTagPostsDescriptionText: (tag: string) => string
}
