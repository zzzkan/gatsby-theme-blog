import React from "react"
import { Box, Container } from "@chakra-ui/react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

const Footer: React.FC = () => {
  const { author } = useSiteMetadata()
  return (
    <Box as={"footer"} position={"sticky"} top={"100vh"}>
      <Container maxWidth={"container.lg"}>
        <Box paddingTop={3}>© 2022 {author}</Box>
      </Container>
    </Box>
  )
}

export default Footer
