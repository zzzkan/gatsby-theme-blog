import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { Alert, Code, Container, Divider, Heading } from "./components"
import colors from "./colors"
import styles from "./styles"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  components: {
    Alert,
    Code,
    Container,
    Divider,
    Heading,
  },
  semanticTokens: {
    colors,
  },
  styles,
})

export default theme