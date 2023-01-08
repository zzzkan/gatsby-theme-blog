import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Heading, Stack, Link } from "@chakra-ui/react"
import { PostMetadata } from "./PostMetadata"
import { Tags } from "./Tags"

export const PostCard: React.FC<Queries.PostCardFragment> = ({
  slug,
  title,
  publishedDate,
  updatedDate,
  featuredImageAlt,
  timeToReadMinutes,
  publishedDateISO8601,
  updatedDateISO8601,
  featuredImage,
  tags,
}) => {
  const image = featuredImage?.childImageSharp?.gatsbyImageData
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
          to={slug}
          aria-label={`Transition to ${title}`}
          _hover={{ textDecoration: "none" }}
        >
          <Box marginTop={-3} marginX={-6} marginBottom={3} overflow={"hidden"}>
            <Box _hover={{ transform: "scale(1.02)" }}>
              <GatsbyImage
                image={image}
                alt={featuredImageAlt ?? "Featured image"}
              />
            </Box>
          </Box>
        </Link>
      )}
      <Stack spacing={0}>
        {tags != null && <Tags tags={tags} />}
        <Link
          as={GatsbyLink}
          to={slug}
          aria-label={`Transition to ${title}`}
          _hover={{ textDecoration: "none" }}
        >
          <Heading as={"div"} size={"md"}>
            {title}
          </Heading>
        </Link>
        <PostMetadata
          publishedDate={publishedDate}
          updatedDate={updatedDate}
          publishedDateISO8601={publishedDateISO8601}
          updatedDateISO8601={updatedDateISO8601}
          timeToReadMinutes={timeToReadMinutes}
        />
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
