import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import { PostCardList, PostCardListProps } from "../components/PostCardList"
import { Pagination, PaginationProps } from "./Pagination"

export type AllPostsProps = PostCardListProps & PaginationProps

export const AllPosts: React.FC<AllPostsProps> = ({
  posts,
  currentPath,
  currentPage,
  totalPage,
}) => {
  return (
    <Box as={"section"}>
      <Heading as={"h1"} size={"xl"} textAlign={"center"} marginBottom={3}>
        All Posts
      </Heading>
      <Center marginBottom={3}>
        <PostCardList posts={posts} />
      </Center>
      <Center>
        <Pagination
          currentPath={currentPath}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </Center>
    </Box>
  )
}
