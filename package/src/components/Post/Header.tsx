import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Heading, Link, Stack } from "@chakra-ui/react"
import { PostMetadata } from "../PostMetadata"
import { Tags } from "../Tags"
import { useMultilingualSentence } from "../../hooks/useMultilingualSentence"

type Props = Pick<
  NonNullable<Queries.PostTemplateQuery["post"]>,
  | "title"
  | "publishedDate"
  | "updatedDate"
  | "publishedDateISO8601"
  | "updatedDateISO8601"
  | "timeToReadMinutes"
  | "featuredImage"
  | "featuredImageAlt"
  | "featuredImageCreditText"
  | "featuredImageCreditLink"
  | "tags"
>

export const Header: React.FC<Props> = ({
  title,
  publishedDate,
  updatedDate,
  featuredImageAlt,
  featuredImageCreditText,
  featuredImageCreditLink,
  timeToReadMinutes,
  publishedDateISO8601,
  updatedDateISO8601,
  featuredImage,
  tags,
}) => {
  const { getFeaturedImageAlt } = useMultilingualSentence()
  const image = featuredImage?.childImageSharp?.gatsbyImageData
  return (
    <Box as={"header"} marginBottom={9}>
      <Stack spacing={0} marginBottom={3}>
        {tags != null && <Tags tags={tags} />}
        <Heading as={"h1"} size={"2xl"}>
          {title}
        </Heading>
        <PostMetadata
          publishedDate={publishedDate}
          updatedDate={updatedDate}
          publishedDateISO8601={publishedDateISO8601}
          updatedDateISO8601={updatedDateISO8601}
          timeToReadMinutes={timeToReadMinutes}
        />
      </Stack>
      {image != null && (
        <Stack spacing={0}>
          <GatsbyImage
            image={image}
            alt={featuredImageAlt ?? getFeaturedImageAlt()}
          />
          {featuredImageCreditLink != null && (
            <Box as={"small"} fontSize={"xs"} textAlign={"right"}>
              Credit:{" "}
              <Link
                href={featuredImageCreditLink}
                target={"_blank"}
                rel={"noopener noreferrer nofollow"}
              >
                {featuredImageCreditText ?? featuredImageCreditLink}
              </Link>
            </Box>
          )}
        </Stack>
      )}
    </Box>
  )
}
