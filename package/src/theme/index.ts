import { extendBaseTheme, type ThemeConfig } from "@chakra-ui/react"
import components from "./components"
import colors from "./colors"
import fonts from "./fonts"
import styles from "./styles"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendBaseTheme({
  config,
  components,
  fonts,
  semanticTokens: {
    colors,
  },
  styles,
})

export default theme
