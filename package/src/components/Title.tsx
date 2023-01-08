import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Heading, Link } from "@chakra-ui/react"

type Props = {
  readonly title: string
}

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <Heading as={"div"} size={"md"} fontWeight={"extrabold"} paddingY={3}>
      <Link
        as={GatsbyLink}
        to="/"
        aria-label={"Transition to home"}
        _hover={{ textDecoration: "none" }}
      >
        {title}
      </Link>
    </Heading>
  )
}
