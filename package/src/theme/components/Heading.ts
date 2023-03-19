import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold",
})

const sizes = {
  "4xl": defineStyle({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: [1.33, null, 1.2],
  }),
  "3xl": defineStyle({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.33, null, 1.2],
  }),
  "2xl": defineStyle({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2],
  }),
  xl: defineStyle({
    fontSize: "3xl",
    lineHeight: 1.2,
  }),
  lg: defineStyle({
    fontSize: "2xl",
    lineHeight: 1.2,
  }),
  md: defineStyle({
    fontSize: "xl",
    lineHeight: 1.2,
  }),
  sm: defineStyle({
    fontSize: "md",
    lineHeight: 1.2,
  }),
  xs: defineStyle({
    fontSize: "sm",
    lineHeight: 1.2,
  }),
}

const variantAnchor = defineStyle({
  ".anchor": {
    visibility: "hidden",
    color: "inherit",
    fontWeight: "normal",
    marginLeft: "1",
  },
  _hover: {
    ".anchor": {
      visibility: "visible",
      textDecoration: "none",
    },
  },
})

const variants = {
  anchor: variantAnchor,
  unstyled: defineStyle({}),
}

export const Heading = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "2xl",
    variant: "unstyled",
  },
})
