import React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { TagPosts } from "../components/TagPosts"
import { Seo } from "../components/Seo"

type PageContext = {
  readonly currentPage: number
  readonly totalPage: number
  readonly tagName: string
  readonly tagCount: number
}

const TagPostsTemplate: React.FC<
  PageProps<Queries.TagPostsTemplateQuery, PageContext>
> = ({ location, data, pageContext }) => {
  const { pathname } = location
  const posts = data.allPost.nodes
  const { currentPage, totalPage, tagName, tagCount } = pageContext
  return (
    <Layout>
      <TagPosts
        name={tagName}
        count={tagCount}
        posts={posts}
        currentPath={pathname}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </Layout>
  )
}

export default TagPostsTemplate

export const Head: HeadFC<Queries.TagPostsTemplateQuery, PageContext> = ({
  location,
  pageContext,
}) => {
  const { pathname } = location
  const { currentPage, tagName } = pageContext
  return (
    <Seo
      path={pathname}
      title={currentPage > 1 ? `${tagName} (${currentPage} page)` : tagName}
      description={
        currentPage > 1
          ? `Posts tagged with "${tagName}". (${currentPage} page)`
          : `Posts tagged with "${tagName}".`
      }
      noindex={true}
    />
  )
}

export const query = graphql`
  query TagPostsTemplate(
    $limit: Int!
    $skip: Int!
    $tagName: String!
    $featuredImageAspectRatio: Float!
    $dateFormatString: String!
  ) {
    allPost(
      sort: { publishedDate: DESC }
      filter: { tags: { elemMatch: { name: { in: [$tagName] } } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        ...PostCard
      }
    }
  }
`
