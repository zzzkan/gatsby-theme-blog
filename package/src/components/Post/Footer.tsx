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

type Props = Pick<
  NonNullable<Queries.PostTemplateQuery["post"]>,
  "relatedPosts"
> & {
  previous: Queries.PostTemplateQuery["previous"]
  next: Queries.PostTemplateQuery["next"]
}

export const Footer: React.FC<Props> = ({ relatedPosts, previous, next }) => {
  return (
    <Box as={"footer"}>
      <Flex>
        {previous != null && (
          <Link
            as={GatsbyLink}
            to={previous.slug}
            aria-label={`Move to ${previous.slug}`}
            textAlign={"left"}
            marginRight={1}
            color={"tint"}
          >
            {`< ${previous.title}`}
          </Link>
        )}
        <Spacer />
        {next != null && (
          <Link
            as={GatsbyLink}
            to={next.slug}
            aria-label={`Move to ${next.slug}`}
            textAlign={"right"}
            marginLeft={1}
            color={"tint"}
          >
            {`${next.title} >`}
          </Link>
        )}
      </Flex>
      {relatedPosts != null && relatedPosts.length > 0 && (
        <>
          <Divider as={"hr"} marginTop={1} marginBottom={3} />
          <Heading as={"div"} size={"md"} textAlign={"center"} marginBottom={3}>
            Read next
          </Heading>
          <Center>
            <PostCardList posts={relatedPosts} />
          </Center>
        </>
      )}
    </Box>
  )
}
