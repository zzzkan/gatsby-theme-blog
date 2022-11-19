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
  query AllPostsTemplate(
    $featuredImageAspectRatio: Float!
    $dateFormatString: String!
  ) {
    allPost(sort: { fields: publishedDate, order: DESC }) {
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
