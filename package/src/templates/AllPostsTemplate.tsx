import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import AllPosts from "../components/AllPosts"

type AllPostsContextProps = {
  readonly basePath: string
  readonly totalPage: number
  readonly currentPage: number
}

const AllPostsTemplate: React.FC<
  PageProps<Queries.AllPostsTemplateQuery, AllPostsContextProps>
> = ({ data, pageContext }) => {
  const posts = data.allPost.nodes
  return (
    <Layout>
      <AllPosts posts={posts} {...pageContext} />
    </Layout>
  )
}

export default AllPostsTemplate

export const query = graphql`
  query AllPostsTemplate(
    $limit: Int!
    $skip: Int!
    $featuredImageAspectRatio: Float!
    $dateFormatString: String!
  ) {
    allPost(
      sort: { fields: publishedDate, order: DESC }
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
