import React from "react"
import { Box, Container } from "@chakra-ui/react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import { useThemeOption } from "../../hooks/useThemeOption"

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { title, author, publicationYear } = useSiteMetadata()
  const { links } = useThemeOption()
  return (
    <Box
      background={"primaryBackground"}
      color={"primaryText"}
      minHeight={"100vh"}
    >
      <Header title={title} />
      <Box as={"main"} marginBottom={9}>
        <Container maxWidth={"container.lg"}>{children}</Container>
      </Box>
      <Footer author={author} publicationYear={publicationYear} links={links} />
    </Box>
  )
}
