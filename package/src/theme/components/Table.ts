import { tableAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  table: {
    borderCollapse: "collapse",
    width: "full",
  },
  th: {
    fontFamily: "heading",
    fontWeight: "semibold",
    textAlign: "start",
  },
  td: {
    textAlign: "start",
  },
})

const variantSimple = definePartsStyle({
  th: {
    color: "primaryText",
    borderBottom: "1px",
    borderColor: "secondaryText",
  },
  td: {
    color: "primaryText",
    borderBottom: "1px",
    borderColor: "secondaryText",
  },
  tfoot: {
    tr: {
      "&:last-of-type": {
        th: { borderBottomWidth: 0 },
      },
    },
  },
})

const variants = {
  simple: variantSimple,
  unstyled: defineStyle({}),
}

const sizes = {
  sm: definePartsStyle({
    th: {
      px: "4",
      py: "1",
      fontSize: "sm",
      lineHeight: "3",
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4",
    },
  }),
  md: definePartsStyle({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5",
    },
  }),
  lg: definePartsStyle({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6",
    },
  }),
}

export const Table = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "simple",
    size: "md",
  },
})
