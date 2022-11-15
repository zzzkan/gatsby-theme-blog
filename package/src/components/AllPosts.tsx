import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import PostCardList, { PostCardListProps } from "../components/PostCardList"

export type AllPostsProps = PostCardListProps

const AllPosts: React.FC<AllPostsProps> = ({ posts }) => {
  return (
    <Box as={"section"}>
      <Heading as={"h1"} textAlign={"center"}>
        All Posts
      </Heading>
      <Center paddingY={3}>
        <PostCardList posts={posts} />
      </Center>
    </Box>
  )
}

export default AllPosts
