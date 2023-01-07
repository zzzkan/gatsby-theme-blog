import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Box, Heading, Stack, Link } from "@chakra-ui/react"
import { PostMetadata, PostMetadataProps } from "./PostMetadata"
import { Tags, TagsProps } from "./Tags"

export type PostCardProps = PostMetadataProps &
  TagsProps & {
    readonly slug: string
    readonly title: string
    readonly featuredImage: {
      readonly childImageSharp: {
        readonly gatsbyImageData: IGatsbyImageData
      } | null
    } | null
    readonly featuredImageAlt: string | null
  }

export const PostCard: React.FC<PostCardProps> = (post) => {
  const image = post.featuredImage?.childImageSharp?.gatsbyImageData
  return (
    <Box
      as={"article"}
      boxShadow={"md"}
      rounded={"xl"}
      paddingX={6}
      paddingY={3}
      overflow={"hidden"}
    >
      {image != null && (
        <Link
          as={GatsbyLink}
          to={post.slug}
          aria-label={`Transition to ${post.title}`}
          _hover={{ textDecoration: "none" }}
        >
          <Box marginTop={-3} marginX={-6} marginBottom={3} overflow={"hidden"}>
            <Box _hover={{ transform: "scale(1.02)" }}>
              <GatsbyImage
                image={image}
                alt={post.featuredImageAlt ?? "Featured image"}
              />
            </Box>
          </Box>
        </Link>
      )}
      <Stack spacing={0}>
        <Tags {...post} />
        <Link
          as={GatsbyLink}
          to={post.slug}
          aria-label={`Transition to ${post.title}`}
          _hover={{ textDecoration: "none" }}
        >
          <Heading as={"div"} size={"md"}>
            {post.title}
          </Heading>
        </Link>
        <PostMetadata {...post} />
      </Stack>
    </Box>
  )
}

export const query = graphql`
  fragment PostCard on Post {
    slug
    title
    publishedDate(formatString: $dateFormatString)
    updatedDate(formatString: $dateFormatString)
    publishedDateISO8601: publishedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
    updatedDateISO8601: updatedDate(formatString: "YYYY-MM-DDTHH:mm:ss")
    featuredImage {
      childImageSharp {
        gatsbyImageData(aspectRatio: $featuredImageAspectRatio, quality: 50)
      }
    }
    featuredImageAlt
    tags {
      slug
      name
    }
    timeToReadMinutes
  }
`
