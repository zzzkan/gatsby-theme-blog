import React from "react"
import { Box, Center, Divider, Heading } from "@chakra-ui/react"
import PostCardList, { PostCardListProps } from "../PostCardList"
import { useThemeColor } from "../../hooks/useThemeColor"

export type FooterProps = PostCardListProps

const Footer: React.FC<FooterProps> = ({ posts }) => {
  const { secondaryText } = useThemeColor()
  return (
    <Box as={"footer"}>
      {posts != null && posts.length > 0 && (
        <Box>
          <Divider
            as={"hr"}
            border={"1px solid"}
            borderColor={secondaryText}
            marginBottom={6}
          />
          <Heading as={"div"} size={"md"} textAlign={"center"} marginBottom={3}>
            You may also like ...
          </Heading>
          <Center>
            <PostCardList posts={posts} />
          </Center>
        </Box>
      )}
    </Box>
  )
}

export default Footer
