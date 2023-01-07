import React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { TagPosts } from "../components/TagPosts"
import { Seo } from "../components/Seo"

type TagPostsContextProps = {
  readonly currentPage: number
  readonly totalPage: number
  readonly tag: string
  readonly count: number
}

const TagPostsTemplate: React.FC<
  PageProps<Queries.TagPostsTemplateQuery, TagPostsContextProps>
> = ({ location, data, pageContext }) => {
  const posts = data.allPost.nodes
  return (
    <Layout>
      <TagPosts
        posts={posts}
        currentPath={location.pathname}
        {...pageContext}
      />
    </Layout>
  )
}

export default TagPostsTemplate

export const Head: HeadFC<
  Queries.TagPostsTemplateQuery,
  TagPostsContextProps
> = ({ location, pageContext }) => {
  const { tag, currentPage } = pageContext
  return (
    <Seo
      path={location.pathname}
      title={currentPage > 1 ? `${tag} (${currentPage} page)` : tag}
      description={
        currentPage > 1
          ? `Posts tagged with "${tag}". (${currentPage} page)`
          : `Posts tagged with "${tag}".`
      }
    />
  )
}

export const query = graphql`
  query TagPostsTemplate(
    $limit: Int!
    $skip: Int!
    $tag: String!
    $featuredImageAspectRatio: Float!
    $dateFormatString: String!
  ) {
    allPost(
      sort: { publishedDate: DESC }
      filter: { tags: { elemMatch: { name: { in: [$tag] } } } }
      limit: $limit
      skip: $skip
    ) {
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
