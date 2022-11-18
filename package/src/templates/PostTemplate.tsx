import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post"

const PostTemplate: React.FC<PageProps<Queries.PostTemplateQuery>> = ({
  data,
  children,
}) => {
  const post = data.post
  return <Layout>{post != null && <Post post={post}>{children}</Post>}</Layout>
}

export default PostTemplate

export const query = graphql`
  query PostTemplate(
    $id: String!
    $aspectRatio: Float!
    $formatString: String!
  ) {
    post(id: { eq: $id }) {
      title
      publishedDate(formatString: $formatString)
      updatedDate(formatString: $formatString)
      publishedDate_ISO8601: publishedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
      updatedDate_ISO8601: updatedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
      featuredImage {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            aspectRatio: $aspectRatio
            quality: 80
          )
        }
      }
      featuredImageAlt
      tags
      timeToReadMinutes
      description
      excerpt
    }
  }
`
