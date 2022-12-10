import React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { Post } from "../components/Post"
import { Seo } from "../components/Seo"

const PostTemplate: React.FC<PageProps<Queries.PostTemplateQuery>> = ({
  data,
  children,
}) => {
  const post = data.post
  return <Layout>{post != null && <Post post={post}>{children}</Post>}</Layout>
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
    />
  )
}

export const query = graphql`
  query PostTemplate(
    $id: String!
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
      tags
      timeToReadMinutes
      description
      excerpt
      posts: relatedPosts {
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
        tags
        timeToReadMinutes
      }
    }
  }
`
