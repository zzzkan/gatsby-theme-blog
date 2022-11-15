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
  query PostTemplate($id: String!) {
    post(id: { eq: $id }) {
      id
      title
      publishedDate(formatString: "YYYY/MM/DD")
      updatedDate(formatString: "YYYY/MM/DD")
      featuredImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.77777, quality: 80)
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
`
