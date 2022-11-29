import React, { ReactNode } from "react"
import { Box, Container } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box background={"base.900"} color={"base.100"} minHeight={"100vh"}>
      <Header />
      <Box as={"main"} marginBottom={9}>
        <Container maxWidth={"container.lg"}>{children}</Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
