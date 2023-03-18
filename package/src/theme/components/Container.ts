import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  width: "100%",
  maxWidth: "container.lg",
  marginX: "auto",
  paddingX: "4",
})

export const Container = defineStyleConfig({
  baseStyle,
})
