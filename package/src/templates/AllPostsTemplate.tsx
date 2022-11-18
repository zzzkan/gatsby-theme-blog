import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import AllPosts from "../components/AllPosts"

const AllPostsTemplate: React.FC<PageProps<Queries.AllPostsTemplateQuery>> = ({
  data,
}) => {
  const posts = data.allPost.nodes
  return (
    <Layout>
      <AllPosts posts={posts} />
    </Layout>
  )
}

export default AllPostsTemplate

export const query = graphql`
  query AllPostsTemplate($aspectRatio: Float!, $formatString: String!) {
    allPost(sort: { fields: publishedDate, order: DESC }) {
      nodes {
        slug
        title
        publishedDate(formatString: $formatString)
        updatedDate(formatString: $formatString)
        publishedDate_ISO8601: publishedDate(
          formatString: "YYYY-MM-DDTHH:mm:ss"
        )
        updatedDate_ISO8601: updatedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
        featuredImage {
          childImageSharp {
            gatsbyImageData(aspectRatio: $aspectRatio, quality: 30)
          }
        }
        featuredImageAlt
        tags
        timeToReadMinutes
      }
    }
  }
`
