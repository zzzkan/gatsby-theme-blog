import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import PostCardList, { PostCardListProps } from "../components/PostCardList"

export type TagPostsProps = PostCardListProps & {
  tag: string
  count: number
}

const TagPosts: React.FC<TagPostsProps> = ({ posts, tag, count }) => {
  return (
    <Box as={"section"}>
      <Heading as={"h1"} textAlign={"center"}>
        Tag - {tag}({count})
      </Heading>
      <Center paddingY={3}>
        <PostCardList posts={posts} />
      </Center>
    </Box>
  )
}

export default TagPosts
