import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  border: "none",
  borderColor: "secondaryText",
})

const variantSolid = defineStyle({
  borderTop: "solid 2px",
})

const variantDashed = defineStyle({
  borderTop: "dashed 2px",
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
