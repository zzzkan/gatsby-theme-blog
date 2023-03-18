import React from "react"
import { ChakraProvider } from "@chakra-ui/provider"
import { ColorModeScript as ChakraColorModeScript } from "@chakra-ui/react"
import theme from "../theme"

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      {children}
    </ChakraProvider>
  )
}

export const ColorModeScript: React.FC = () => {
  return (
    <ChakraColorModeScript initialColorMode={theme.config.initialColorMode} />
  )
}
