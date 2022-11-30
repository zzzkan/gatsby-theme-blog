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
