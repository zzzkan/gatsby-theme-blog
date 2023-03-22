import React from "react"
import { Center, Heading } from "@chakra-ui/react"
import { Pagination } from "./Pagination"
import { PostCardList } from "../components/PostCardList"
import { type PaginationType } from "../types/paginationType"

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
    <>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} marginBottom={3}>
        All Posts
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
