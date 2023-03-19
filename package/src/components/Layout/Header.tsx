import React from "react"
import { Box, Flex, Spacer } from "@chakra-ui/react"
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
      background={"primaryBackground"}
      marginBottom={9}
    >
      <Flex alignItems={"center"}>
        <Title title={title} />
        <Spacer />
        <ToggleColorModeButton />
      </Flex>
    </Box>
  )
}
