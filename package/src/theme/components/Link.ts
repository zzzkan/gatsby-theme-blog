import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline",
  },
})

export const Link = defineStyleConfig({
  baseStyle,
})
