export const resource = {
  FeaturedImageAltText: "Featured image",
  FeaturedImageLinkAltText: (pageName: string) =>
    `Go to the page (${pageName})`,
  ToggleColorModeLabelText: "Switch to color mode",
  AllPostsText: "All Posts",
  PreviousPageText: "Previous Post",
  NextPageText: "Next Post",
  RelatedPostsText: "Related Posts",
  PageCountText: (count: number) => `page ${count}`,
  TagPostsDescriptionText: (tagName: string) => `Posts tagged with ${tagName}`,
}
