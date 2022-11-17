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
  query AllPostsTemplate {
    allPost(sort: { fields: publishedDate, order: DESC }) {
      nodes {
        id
        slug
        title
        publishedDate(formatString: "YYYY-MM-DD")
        updatedDate(formatString: "YYYY-MM-DD")
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
