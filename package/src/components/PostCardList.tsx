import React from "react"
import { SimpleGrid } from "@chakra-ui/react"
import { PostCard } from "../components/PostCard"

type Props = {
  readonly posts: readonly Queries.PostCardFragment[]
}

export const PostCardList: React.FC<Props> = ({ posts }) => {
  if (posts.length === 0) return null
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={"6"}>
      {posts.map((post) => {
        return <PostCard key={post.slug} {...post} />
      })}
    </SimpleGrid>
  )
}
