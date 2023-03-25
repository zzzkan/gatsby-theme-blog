import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Heading, Link } from "@chakra-ui/react"
import { useMultilingualSentence } from "../hooks/useMultilingualSentence"

type Props = {
  readonly title: string
}

export const Title: React.FC<Props> = ({ title }) => {
  const { movePageSentence } = useMultilingualSentence()
  return (
    <Heading as={"div"} size={"md"} fontWeight={"extrabold"} paddingY={3}>
      <Link
        as={GatsbyLink}
        to="/"
        aria-label={movePageSentence("/")}
        _hover={{ textDecoration: "none" }}
      >
        {title}
      </Link>
    </Heading>
  )
}
