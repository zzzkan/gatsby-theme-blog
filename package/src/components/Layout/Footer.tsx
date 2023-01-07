import React from "react"
import { Box, Container, Flex, Spacer } from "@chakra-ui/react"
import { Copyright, CopyrightProps } from "../Copyright"
import { ExternalLinks, ExternalLinksProps } from "../ExternalLinks"

export const Footer: React.FC<CopyrightProps & ExternalLinksProps> = ({
  author,
  publicationYear,
  links,
}) => {
  return (
    <Box as={"footer"} position={"sticky"} top={"100vh"}>
      <Container maxWidth={"container.lg"}>
        <Flex alignItems={"end"}>
          <Copyright author={author} publicationYear={publicationYear} />
          <Spacer />
          <ExternalLinks links={links} />
        </Flex>
      </Container>
    </Box>
  )
}
