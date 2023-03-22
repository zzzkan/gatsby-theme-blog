import React from "react"
import { Box, Center, Divider, Heading } from "@chakra-ui/react"
import { PostCardList } from "../PostCardList"

type Props = Pick<
  NonNullable<Queries.PostTemplateQuery["post"]>,
  "relatedPosts"
>

export const Footer: React.FC<Props> = ({ relatedPosts }) => {
  if (relatedPosts == null || relatedPosts.length === 0) return null
  return (
    <Box as={"footer"}>
      <Divider as={"hr"} marginBottom={3} />
      <Heading as={"div"} size={"md"} textAlign={"center"} marginBottom={3}>
        Read next
      </Heading>
      <Center>
        <PostCardList posts={relatedPosts} />
      </Center>
    </Box>
  )
}
