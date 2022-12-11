import React from "react"
import { Box, SimpleGrid } from "@chakra-ui/react"
import { PostCard, PostCardProps } from "../components/PostCard"

export type PostCardListProps = {
  readonly posts: ReadonlyArray<PostCardProps | null> | null
}

export const PostCardList: React.FC<PostCardListProps> = ({ posts }) => {
  if (posts == null || posts.length === 0) return null
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={"6"}>
      {posts.map((post) => {
        if (post == null) return <Box>Unknown Post</Box>
        return <PostCard key={post.slug} {...post} />
      })}
    </SimpleGrid>
  )
}
