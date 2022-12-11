import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import { PostCardList, PostCardListProps } from "../components/PostCardList"
import { Pagination, PaginationProps } from "./Pagination"

export type TagPostsProps = PostCardListProps &
  PaginationProps & {
    readonly tag: string
    readonly count: number
  }

export const TagPosts: React.FC<TagPostsProps> = ({
  posts,
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
          prefix={`tags/${tag}`}
          totalPage={totalPage}
          currentPage={currentPage}
        />
      </Center>
    </Box>
  )
}
