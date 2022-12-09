import { useStaticQuery, graphql } from "gatsby"

type SiteMetadataProps = {
  title: string
  siteUrl: string
  description: string
  author: string
  publicationYear: string
  image: string
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
