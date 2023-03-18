import React from "react"
import { Box, Flex, Spacer } from "@chakra-ui/react"
import { Copyright } from "../Copyright"
import { ExternalLinks } from "../ExternalLinks"
import { type SiteMetadataType } from "../../types/siteMetadataType"
import { type ThemeOptionType } from "../../types/themeOptionType"

type Props = Pick<SiteMetadataType, "author" | "publicationYear"> &
  Pick<ThemeOptionType, "links">

export const Footer: React.FC<Props> = ({ author, publicationYear, links }) => {
  return (
    <Box as={"footer"} position={"sticky"} top={"100vh"}>
      <Flex alignItems={"end"}>
        <Copyright author={author} publicationYear={publicationYear} />
        <Spacer />
        <ExternalLinks links={links} />
      </Flex>
    </Box>
  )
}
