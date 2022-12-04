import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import PostCardList, { PostCardListProps } from "../components/PostCardList"
import Pagination, { PaginationProps } from "./Pagination"

export type TagPostsProps = PostCardListProps &
  PaginationProps & {
    tag: string
    count: number
  }

const TagPosts: React.FC<TagPostsProps> = ({
  posts,
  basePath,
  totalPage,
  currentPage,
  tag,
  count,
}) => {
  return (
    <Box as={"section"}>
      <Heading as={"h1"} size={"xl"} textAlign={"center"} marginBottom={3}>
        Tag - {tag}({count})
      </Heading>
      <Center marginBottom={3}>
        <PostCardList posts={posts} />
      </Center>
      <Center>
        <Pagination
          basePath={basePath}
          totalPage={totalPage}
          currentPage={currentPage}
        />
      </Center>
    </Box>
  )
}

export default TagPosts
