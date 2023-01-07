import React from "react"
import { Box, Container, Flex, Spacer } from "@chakra-ui/react"
import { Title, TitleProps } from "../Title"
import { ToggleColorModeButton } from "../ToggleColorModeButton"

export const Header: React.FC<TitleProps> = ({ title }) => {
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
          <Title title={title} />
          <Spacer />
          <ToggleColorModeButton />
        </Flex>
      </Container>
    </Box>
  )
}
