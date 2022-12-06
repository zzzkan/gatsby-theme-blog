import React from "react"
import { Box, Container, Flex, Spacer } from "@chakra-ui/react"
import Left from "./Left"
import Right from "./Right"

const Header: React.FC = () => {
  return (
    <Box
      as={"header"}
      position={"sticky"}
      top={0}
      zIndex={"sticky"}
      background={"inherit"}
      marginBottom={9}
    >
      <Container maxWidth={"container.lg"}>
        <Flex alignItems={"center"}>
          <Left />
          <Spacer />
          <Right />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
