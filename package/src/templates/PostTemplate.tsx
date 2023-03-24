import React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { Post } from "../components/Post"
import { Seo } from "../components/Seo"

const PostTemplate: React.FC<PageProps<Queries.PostTemplateQuery>> = ({
  data,
  children,
}) => {
  const { post, previous, next } = data
  return (
    <Layout>
      <Post post={post} previous={previous} next={next}>
        {children}
      </Post>
    </Layout>
  )
}

export default PostTemplate

export const Head: HeadFC<Queries.PostTemplateQuery> = ({ location, data }) => {
  if (data.post == null) return <Seo />
  const {
    title,
    publishedDateISO8601,
    updatedDateISO8601,
    featuredImage,
    description,
    noindex,
    excerpt,
  } = data.post
  return (
    <Seo
      path={location.pathname}
      title={title}
      description={description ?? excerpt}
      publishedDate={publishedDateISO8601}
      updatedDate={updatedDateISO8601 ?? undefined}
      image={featuredImage?.childImageSharp?.resize?.src ?? undefined}
      noindex={noindex ?? undefined}
    />
  )
}

export const query = graphql`
  query PostTemplate(
    $id: String!
    $previousId: String
    $nextId: String
    $featuredImageAspectRatio: Float!
    $dateFormatString: String!
  ) {
    post(id: { eq: $id }) {
      title
      publishedDate(formatString: $dateFormatString)
      updatedDate(formatString: $dateFormatString)
      publishedDateISO8601: publishedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
      updatedDateISO8601: updatedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
      featuredImage {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            aspectRatio: $featuredImageAspectRatio
            quality: 80
          )
          resize(width: 1200) {
            src
          }
        }
      }
      featuredImageAlt
      tags {
        slug
        name
      }
      timeToReadMinutes
      description
      noindex
      excerpt
      relatedPosts {
        ...PostCard
      }
    }
    previous: post(id: { eq: $previousId }) {
      slug
      title
    }
    next: post(id: { eq: $nextId }) {
      slug
      title
    }
  }
`
