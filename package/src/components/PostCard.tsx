// Disable some eslint rules because Queries type is undefined in CI
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Heading, Stack, Link, useColorModeValue } from "@chakra-ui/react"
import { PostMetadata } from "./PostMetadata"
import { Tags } from "./Tags"
import { resource } from "../resource"

export const PostCard: React.FC<Queries.PostCardFragment> = ({
  slug,
  title,
  publishedDate,
  updatedDate,
  timeToReadMinutes,
  publishedDateISO8601,
  updatedDateISO8601,
  featuredImage,
  tags,
}) => {
  const boxShadowStyle = useColorModeValue("lg", "dark-lg")
  const image = featuredImage?.childImageSharp?.gatsbyImageData
  return (
    <Box boxShadow={boxShadowStyle} rounded={"xl"} overflow={"hidden"}>
      {image != null && (
        <Link as={GatsbyLink} to={slug} _hover={{ textDecoration: "none" }}>
          <GatsbyImage
            image={image}
            alt={resource.FeaturedImageLinkAltText(title)}
          />
        </Link>
      )}
      <Stack spacing={0} paddingX={6} paddingY={3}>
        {tags != null && <Tags tags={tags} />}
        <Link as={GatsbyLink} to={slug}>
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
    publishedDateISO8601: publishedDate(formatString: "YYYY-MM-DD")
    updatedDateISO8601: updatedDate(formatString: "YYYY-MM-DD")
    featuredImage {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          aspectRatio: $featuredImageAspectRatio
          quality: 50
        )
      }
    }
    tags {
      slug
      name
    }
    timeToReadMinutes
  }
`
