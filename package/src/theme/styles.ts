import type { Styles } from "@chakra-ui/theme-tools"

const styles: Styles = {
  global: {
    html: {
      scrollPaddingTop: "12",
      scrollbarGutter: "stable",
    },
    body: {
      fontFamily: "body",
      color: "primaryText",
      background: "primaryBackground",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
  },
}

export default styles
