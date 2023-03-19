import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  height: "1px",
  background: "secondaryText",
  border: "none",
})

const variantSolid = defineStyle({
  borderStyle: "solid",
})

const variantDashed = defineStyle({
  borderStyle: "dashed",
})

const variants = {
  solid: variantSolid,
  dashed: variantDashed,
}

export const Divider = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "solid",
  },
})
