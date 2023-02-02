import { useStaticQuery, graphql } from "gatsby"
import { type SiteMetadataType } from "../types/siteMetadataType"

export const useSiteMetadata = (): SiteMetadataType => {
  const { site } = useStaticQuery<{
    site: { siteMetadata: SiteMetadataType }
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
            imageUrl
          }
        }
      }
    `
  )
  return site.siteMetadata
}
