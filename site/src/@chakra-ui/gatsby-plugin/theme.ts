import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    brand: {
      100: "#FAF2FF",
      200: "#E0BBFE",
      300: "#BC80F7",
      400: "#8B45E3",
      500: "#5311BD",
      600: "#350697",
      700: "#1F0171",
      800: "#10004C",
      900: "#060026",
    },
    base: {
      100: "#FBFAFC",
      200: "#EDEAF0",
      300: "#DFDAE4",
      400: "#D0CBD8",
      500: "#C2BCCC",
      600: "#9995A3",
      700: "#716E79",
      800: "#4A4850",
      900: "#232226",
    },
  },
  semanticTokens: {
    colors: {
      tint: { default: "brand.600", _dark: "brand.200" },
      primaryText: { default: "base.800", _dark: "base.100" },
      secondaryText: { default: "base.600", _dark: "base.400" },
      onTintText: { default: "white", _dark: "base.900" },
      primaryBackground: { default: "white", _dark: "base.900" },
      secondaryBackground: {
        default: "RGBA(0, 0, 0, 0.02)",
        _dark: "RGBA(255, 255, 255, 0.02)",
      },
      highlightCode: {
        default: "RGBA(255, 255, 255, 0.1)",
      },
    },
  },
  styles: {
    global: {
      html: {
        scrollPaddingTop: "12",
        scrollbarGutter: "stable",
      },
    },
  },
})

export default theme
