import { useStaticQuery, graphql } from "gatsby"

type SiteMetadataProps = {
  readonly title: string
  readonly siteUrl: string
  readonly description: string
  readonly author: string
  readonly publicationYear: string
  readonly image: string
}

export const useSiteMetadata = (): SiteMetadataProps => {
  const { site } = useStaticQuery<{
    site: { siteMetadata: SiteMetadataProps }
  }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            publicationYear
            image
          }
        }
      }
    `
  )
  return site.siteMetadata
}
