import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import PostCardList, { PostCardListProps } from "../components/PostCardList"

export type AllPostsProps = PostCardListProps

const AllPosts: React.FC<AllPostsProps> = ({ posts }) => {
  return (
    <Box as={"section"}>
      <Heading as={"h1"} size={"xl"} textAlign={"center"} marginBottom={3}>
        All Posts
      </Heading>
      <Center>
        <PostCardList posts={posts} />
      </Center>
    </Box>
  )
}

export default AllPosts
