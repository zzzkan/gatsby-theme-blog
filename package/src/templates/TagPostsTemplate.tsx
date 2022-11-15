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
  query TagPostsTemplate($tag: String!) {
    allPost(
      sort: { fields: publishedDate, order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      nodes {
        id
        slug
        title
        publishedDate(formatString: "YYYY/MM/DD")
        updatedDate(formatString: "YYYY/MM/DD")
        featuredImage {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.77777, quality: 30)
          }
        }
        featuredImageAlt
        tags
        timeToReadMinutes
        wordCount
        description
        excerpt
      }
    }
  }
`
