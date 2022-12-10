import React from "react"
import { Box, Container } from "@chakra-ui/react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      background={"primaryBackground"}
      color={"primaryText"}
      minHeight={"100vh"}
    >
      <Header />
      <Box as={"main"} marginBottom={9}>
        <Container maxWidth={"container.lg"}>{children}</Container>
      </Box>
      <Footer />
    </Box>
  )
}
