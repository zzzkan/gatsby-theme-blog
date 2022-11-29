import React from "react"
import { Box, Container, Flex, Spacer } from "@chakra-ui/react"
import Title from "./Title"

const Header: React.FC = () => {
  return (
    <Box
      as={"header"}
      position={"sticky"}
      top={0}
      zIndex={"sticky"}
      backdropFilter={"blur(3px)"}
      marginBottom={9}
    >
      <Container maxWidth={"container.lg"}>
        <Flex alignItems={"end"}>
          <Title />
          <Spacer />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
