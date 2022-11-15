import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Heading, Stack } from "@chakra-ui/react"
import PostMetadata, { PostMetadataProps } from "../PostMetadata"
import Tags, { TagsProps } from "../Tags"

export type HeaderProps = PostMetadataProps &
  TagsProps & {
    readonly title: string
    readonly featuredImage: {
      readonly childImageSharp: {
        readonly gatsbyImageData: import("gatsby-plugin-image").IGatsbyImageData
      } | null
    } | null
    readonly featuredImageAlt: string | null
    readonly wordCount: number | null
  }

const Header: React.FC<HeaderProps> = (post) => {
  const image = post.featuredImage?.childImageSharp?.gatsbyImageData
  return (
    <Box as={"header"}>
      <Stack spacing={0} marginBottom={3}>
        <Tags {...post} />
        <Heading as={"h1"} fontSize={"xl"}>
          {post.title}
        </Heading>
        <PostMetadata {...post} />
      </Stack>
      {image != null && (
        <GatsbyImage
          image={image}
          alt={post.featuredImageAlt ?? "Featured image"}
        />
      )}
    </Box>
  )
}

export default Header
