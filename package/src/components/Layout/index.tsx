import React, { ReactNode } from "react"
import { Box, Container } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"
import { useThemeColor } from "../../hooks/useThemeColor"

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { primaryText, primaryBackground } = useThemeColor()
  return (
    <Box background={primaryBackground} color={primaryText} minHeight={"100vh"}>
      <Header />
      <Box as={"main"} marginBottom={9}>
        <Container maxWidth={"container.lg"}>{children}</Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
