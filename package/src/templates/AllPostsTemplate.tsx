import React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { AllPosts } from "../components/AllPosts"
import { Seo } from "../components/Seo"

type AllPostsContextProps = {
  readonly currentPage: number
  readonly totalPage: number
}

const AllPostsTemplate: React.FC<
  PageProps<Queries.AllPostsTemplateQuery, AllPostsContextProps>
> = ({ location, data, pageContext }) => {
  const posts = data.allPost.nodes
  return (
    <Layout>
      <AllPosts
        posts={posts}
        currentPath={location.pathname}
        {...pageContext}
      />
    </Layout>
  )
}

export default AllPostsTemplate

export const Head: HeadFC<
  Queries.AllPostsTemplateQuery,
  AllPostsContextProps
> = ({ location, pageContext }) => {
  const { currentPage } = pageContext
  return (
    <Seo
      path={location.pathname}
      title={currentPage > 1 ? `All Posts (${currentPage} page)` : "All Posts"}
      description={
        currentPage > 1
          ? `All posts page. (${currentPage} page)`
          : "All posts page."
      }
    />
  )
}

export const query = graphql`
  query AllPostsTemplate(
    $limit: Int!
    $skip: Int!
    $featuredImageAspectRatio: Float!
    $dateFormatString: String!
  ) {
    allPost(sort: { publishedDate: DESC }, limit: $limit, skip: $skip) {
      nodes {
        slug
        title
        publishedDate(formatString: $dateFormatString)
        updatedDate(formatString: $dateFormatString)
        publishedDateISO8601: publishedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
        updatedDateISO8601: updatedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
        featuredImage {
          childImageSharp {
            gatsbyImageData(aspectRatio: $featuredImageAspectRatio, quality: 30)
          }
        }
        featuredImageAlt
        tags {
          slug
          name
        }
        timeToReadMinutes
      }
    }
  }
`
