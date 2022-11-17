import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Container, Link } from "@chakra-ui/react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

const Header: React.FC = () => {
  const { title } = useSiteMetadata()
  return (
    <Box
      as={"header"}
      position={"sticky"}
      top={0}
      zIndex={"sticky"}
      backdropFilter={"blur(8px)"}
      fontSize={"2xl"}
    >
      <Container maxWidth={"container.lg"}>
        <Box paddingY={3}>
          <Link as={GatsbyLink} to="/">
            {title}
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
