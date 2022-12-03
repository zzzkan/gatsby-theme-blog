import React from "react"
import { Box, SimpleGrid } from "@chakra-ui/react"
import PostCard, { PostCardProps } from "../components/PostCard"

export type PostCardListProps = {
  posts: ReadonlyArray<PostCardProps | null> | null
}

const PostCardList: React.FC<PostCardListProps> = ({ posts }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={"6"}>
      {posts?.map((post) => {
        if (post == null) return <Box>Unknown Post</Box>
        return <PostCard key={post.slug} {...post} />
      })}
    </SimpleGrid>
  )
}

export default PostCardList