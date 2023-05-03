// Disable some eslint rules because Queries type is undefined in CI
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  Spacer,
} from "@chakra-ui/react"
import { PostCardList } from "../PostCardList"
import { useMultilingualSentence } from "../../hooks/useMultilingualSentence"

type Props = Pick<
  NonNullable<Queries.PostTemplateQuery["post"]>,
  "relatedPosts"
> & {
  previous: Queries.PostTemplateQuery["previous"]
  next: Queries.PostTemplateQuery["next"]
}

export const Footer: React.FC<Props> = ({ relatedPosts, previous, next }) => {
  const { getPreviousPageText, getNextPageText, getRelatedPostsText } =
    useMultilingualSentence()
  return (
    <Box as={"footer"}>
      <Flex>
        {previous != null && (
          <Link
            as={GatsbyLink}
            to={previous.slug}
            textAlign={"left"}
            marginRight={1}
          >
            {`< ${getPreviousPageText()}`}
          </Link>
        )}
        <Spacer />
        {next != null && (
          <Link
            as={GatsbyLink}
            to={next.slug}
            textAlign={"right"}
            marginLeft={1}
          >
            {`${getNextPageText()} >`}
          </Link>
        )}
      </Flex>
      {relatedPosts != null && relatedPosts.length > 0 && (
        <>
          <Divider as={"hr"} marginTop={1} marginBottom={9} />
          <Heading
            as={"div"}
            size={"md"}
            textAlign={"center"}
            fontWeight={"bold"}
            marginBottom={3}
          >
            {getRelatedPostsText()}
          </Heading>
          <Center>
            <PostCardList posts={relatedPosts} />
          </Center>
        </>
      )}
    </Box>
  )
}
