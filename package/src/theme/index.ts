import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { Container } from "./components"
import colors from "./colors"
import styles from "./styles"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  components: {
    Container,
  },
  semanticTokens: {
    colors,
  },
  styles,
})

export default theme
