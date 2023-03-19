import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  border: "none",
  borderWidth: "1px",
  borderColor: "secondaryText",
})

const variantSolid = defineStyle({
  borderTop: "solid",
})

const variantDashed = defineStyle({
  borderTop: "dashed",
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
