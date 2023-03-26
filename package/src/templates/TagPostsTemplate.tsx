import React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { TagPosts } from "../components/TagPosts"
import { Seo } from "../components/Seo"
import { useMultilingualSentence } from "../hooks/useMultilingualSentence"

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
  const isNotFirstPage = currentPage > 1
  const { getTagPostsDescriptionText, getPageCountText } =
    useMultilingualSentence()
  return (
    <Seo
      path={pathname}
      title={
        isNotFirstPage
          ? `${tagName} (${getPageCountText(currentPage)})`
          : tagName
      }
      description={
        isNotFirstPage
          ? `${getTagPostsDescriptionText(tagName)} (${getPageCountText(
              currentPage
            )})`
          : getTagPostsDescriptionText(tagName)
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
