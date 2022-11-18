import { useStaticQuery, graphql } from "gatsby"

type SiteMetadataProps = {
  site: {
    siteMetadata: Queries.SiteSiteMetadata
  }
}

export const useSiteMetadata = (): Queries.SiteSiteMetadata => {
  const { site } = useStaticQuery<SiteMetadataProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
          }
        }
      }
    `
  )
  return site.siteMetadata
}
