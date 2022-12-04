import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import TagPosts from "../components/TagPosts"

type TagPostsContextProps = {
  readonly basePath: string
  readonly totalPage: number
  readonly currentPage: number
  readonly tag: string
  readonly count: number
}

const TagPostsTemplate: React.FC<
  PageProps<Queries.TagPostsTemplateQuery, TagPostsContextProps>
> = ({ data, pageContext }) => {
  const posts = data.allPost.nodes
  return (
    <Layout>
      <TagPosts posts={posts} {...pageContext} />
    </Layout>
  )
}

export default TagPostsTemplate

export const query = graphql`
  query TagPostsTemplate(
    $limit: Int!
    $skip: Int!
    $tag: String!
    $featuredImageAspectRatio: Float!
    $dateFormatString: String!
  ) {
    allPost(
      sort: { fields: publishedDate, order: DESC }
      filter: { tags: { in: [$tag] } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        slug
        title
        publishedDate(formatString: $dateFormatString)
        updatedDate(formatString: $dateFormatString)
        publishedDate_ISO8601: publishedDate(
          formatString: "YYYY-MM-DDTHH:mm:ss"
        )
        updatedDate_ISO8601: updatedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
        featuredImage {
          childImageSharp {
            gatsbyImageData(aspectRatio: $featuredImageAspectRatio, quality: 30)
          }
        }
        featuredImageAlt
        tags
        timeToReadMinutes
      }
    }
  }
`
