import React from "react"
import { Box, Wrap, WrapItem } from "@chakra-ui/react"

export type PostMetadataProps = {
  readonly publishedDate: string
  readonly updatedDate: string | null
  readonly wordCount: number | null
}

const PostMetadata: React.FC<PostMetadataProps> = (post) => {
  return (
    <Wrap spacing={1} fontSize={"sm"}>
      <WrapItem>
        <Box as="time">{post.publishedDate}</Box>
      </WrapItem>
      <WrapItem>
        <Box as="time">{post.updatedDate}</Box>
      </WrapItem>
      <WrapItem>{post.wordCount}</WrapItem>
    </Wrap>
  )
}

export default PostMetadata
