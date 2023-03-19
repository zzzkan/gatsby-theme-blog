import { extendBaseTheme, type ThemeConfig } from "@chakra-ui/react"
import components from "./components"
import colors from "./colors"
import styles from "./styles"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendBaseTheme({
  config,
  components,
  semanticTokens: {
    colors,
  },
  styles,
})

export default theme
