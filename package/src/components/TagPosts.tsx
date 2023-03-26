import React from "react"
import { Center, Heading } from "@chakra-ui/react"
import { Pagination } from "./Pagination"
import { PostCardList } from "../components/PostCardList"
import { type PaginationType } from "../types/paginationType"

type Props = {
  readonly name: string
  readonly count: number
  posts: Queries.TagPostsTemplateQuery["allPost"]["nodes"]
} & PaginationType

export const TagPosts: React.FC<Props> = ({
  name,
  count,
  posts,
  currentPath,
  currentPage,
  totalPage,
}) => {
  return (
    <>
      <Heading as={"h1"} size={"xl"} textAlign={"center"} marginBottom={3}>
        {name} ({count})
      </Heading>
      <Center marginBottom={3}>
        <PostCardList posts={posts} />
      </Center>
      {totalPage > 1 && (
        <Center>
          <Pagination
            currentPath={currentPath}
            currentPage={currentPage}
            totalPage={totalPage}
          />
        </Center>
      )}
    </>
  )
}
