import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  paddingX: "0.2em",
  borderRadius: "sm",
  background: "unset",
})

export const Code = defineStyleConfig({
  baseStyle,
  defaultProps: {
    variant: "",
    colorScheme: "",
  },
})
