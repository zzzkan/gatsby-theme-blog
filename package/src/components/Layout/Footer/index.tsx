import React from "react"
import { Box, Container, Flex, Spacer } from "@chakra-ui/react"
import Left from "./Left"
import Right from "./Right"

const Footer: React.FC = () => {
  return (
    <Box as={"footer"} position={"sticky"} top={"100vh"}>
      <Container maxWidth={"container.lg"}>
        <Flex alignItems={"end"}>
          <Left />
          <Spacer />
          <Right />
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
