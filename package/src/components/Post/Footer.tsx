import React from "react"
import { Box, Center, Divider, Heading } from "@chakra-ui/react"
import { PostCardList, PostCardListProps } from "../PostCardList"

export type FooterProps = PostCardListProps

export const Footer: React.FC<FooterProps> = ({ posts }) => {
  return (
    <Box as={"footer"}>
      {posts != null && posts.length > 0 && (
        <Box>
          <Divider
            as={"hr"}
            border={"1px solid"}
            borderColor={"secondaryText"}
            marginBottom={3}
          />
          <Heading as={"div"} size={"md"} textAlign={"center"} marginBottom={3}>
            Read next
          </Heading>
          <Center>
            <PostCardList posts={posts} />
          </Center>
        </Box>
      )}
    </Box>
  )
}
