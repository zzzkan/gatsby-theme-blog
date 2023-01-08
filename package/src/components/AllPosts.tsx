import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import { Pagination } from "./Pagination"
import { PostCardList } from "../components/PostCardList"
import { PaginationType } from "../types/paginationType"

type Props = {
  posts: Queries.AllPostsTemplateQuery["allPost"]["nodes"]
} & PaginationType

export const AllPosts: React.FC<Props> = ({
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
