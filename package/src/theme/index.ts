import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import colors from "./colors"
import styles from "./styles"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  semanticTokens: {
    colors,
  },
  styles,
})

export default theme
