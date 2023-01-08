import React from "react"
import { Box, Center, Divider, Heading } from "@chakra-ui/react"
import { PostCardList } from "../PostCardList"

type Props = Pick<
  NonNullable<Queries.PostTemplateQuery["post"]>,
  "relatedPosts"
>

export const Footer: React.FC<Props> = ({ relatedPosts }) => {
  return (
    <Box as={"footer"}>
      {relatedPosts != null && relatedPosts.length > 0 && (
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
            <PostCardList posts={relatedPosts} />
          </Center>
        </Box>
      )}
    </Box>
  )
}
