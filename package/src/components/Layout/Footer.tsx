import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Container, Link } from "@chakra-ui/react"

const Footer: React.FC = () => {
  return (
    <Box as={"footer"} position={"sticky"} top={"100vh"}>
      <Container maxWidth={"container.lg"}>
        <Box paddingTop={3}>
          © 2022{" "}
          <Link as={GatsbyLink} to="/">
            zzzkan
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
