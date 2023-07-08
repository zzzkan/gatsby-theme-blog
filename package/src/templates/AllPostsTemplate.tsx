import React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { AllPosts } from "../components/AllPosts"
import { Seo } from "../components/Seo"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { resource } from "../resource"

type PageContext = {
  readonly currentPage: number
  readonly totalPage: number
}

const AllPostsTemplate: React.FC<
  PageProps<Queries.AllPostsTemplateQuery, PageContext>
> = ({ location, data, pageContext }) => {
  const { pathname } = location
  const posts = data.allPost.nodes
  const { currentPage, totalPage } = pageContext
  return (
    <Layout>
      <AllPosts
        posts={posts}
        currentPath={pathname}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </Layout>
  )
}

export default AllPostsTemplate

export const Head: HeadFC<Queries.AllPostsTemplateQuery, PageContext> = ({
  location,
  pageContext,
}) => {
  const { pathname } = location
  const { currentPage } = pageContext
  const isNotFirstPage = currentPage > 1
  const { description } = useSiteMetadata()
  return (
    <Seo
      path={pathname}
      title={
        isNotFirstPage
          ? `${resource.AllPostsText} (${resource.PageCountText(currentPage)})`
          : resource.AllPostsText
      }
      description={
        isNotFirstPage
          ? `${description} (${resource.PageCountText(currentPage)})`
          : description
      }
      noindex={isNotFirstPage}
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
        ...PostCard
      }
    }
  }
`
