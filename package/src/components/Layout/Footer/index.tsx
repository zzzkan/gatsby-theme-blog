import React from "react"
import { Box, Container, Flex, Spacer } from "@chakra-ui/react"
import Copyright from "./Copyright"
import ExternalLinks from "./ExternalLinks"

const Footer: React.FC = () => {
  return (
    <Box as={"footer"} position={"sticky"} top={"100vh"}>
      <Container maxWidth={"container.lg"}>
        <Flex alignItems={"end"}>
          <Copyright />
          <Spacer />
          <ExternalLinks />
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
