import React from "react"
import { Box, Container, Flex, Spacer } from "@chakra-ui/react"
import { Title } from "../Title"
import { ToggleColorModeButton } from "../ToggleColorModeButton"
import { type SiteMetadataType } from "../../types/siteMetadataType"

type Props = Pick<SiteMetadataType, "title">

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <Box
      as={"header"}
      position={"sticky"}
      top={0}
      zIndex={"sticky"}
      background={"inherit"}
      marginBottom={9}
    >
      <Container>
        <Flex alignItems={"center"}>
          <Title title={title} />
          <Spacer />
          <ToggleColorModeButton />
        </Flex>
      </Container>
    </Box>
  )
}
