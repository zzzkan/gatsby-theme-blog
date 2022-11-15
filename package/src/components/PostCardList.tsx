import React from "react"
import { SimpleGrid } from "@chakra-ui/react"
import PostCard, { PostCardProps } from "../components/PostCard"

export type PostCardListProps = {
  posts: readonly PostCardProps[]
}

const PostCardList: React.FC<PostCardListProps> = ({ posts }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={"6"}>
      {posts.map((post) => {
        return <PostCard key={post.slug} {...post} />
      })}
    </SimpleGrid>
  )
}

export default PostCardList
