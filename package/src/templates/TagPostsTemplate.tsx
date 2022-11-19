import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import TagPosts from "../components/TagPosts"

type TagPageContextProps = {
  tag: string
  count: number
}

const TagPostsTemplate: React.FC<
  PageProps<Queries.TagPostsTemplateQuery, TagPageContextProps>
> = ({ data, pageContext }) => {
  const posts = data.allPost.nodes
  const { tag, count } = pageContext
  return (
    <Layout>
      <TagPosts posts={posts} tag={tag} count={count} />
    </Layout>
  )
}

export default TagPostsTemplate

export const query = graphql`
  query TagPostsTemplate(
    $tag: String!
    $featuredImageAspectRatio: Float!
    $dateFormatString: String!
  ) {
    allPost(
      sort: { fields: publishedDate, order: DESC }
      filter: { tags: { in: [$tag] } }
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
