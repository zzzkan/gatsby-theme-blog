import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Container, Link } from "@chakra-ui/react"

const Header: React.FC = () => {
  return (
    <Box
      as={"header"}
      position={"sticky"}
      top={0}
      zIndex={"sticky"}
      backdropFilter={"blur(8px)"}
    >
      <Container maxWidth={"container.lg"}>
        <Box paddingY={3}>
          <Link as={GatsbyLink} to="/">
            Header
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
