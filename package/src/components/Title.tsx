import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Heading, Link } from "@chakra-ui/react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const Title: React.FC = () => {
  const { title } = useSiteMetadata()
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
