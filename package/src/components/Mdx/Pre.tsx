import React from "react"
import { Box, type BoxProps } from "@chakra-ui/react"

export const Pre: React.FC<
  BoxProps & { highlightCodeColor: string; lineColor: string }
> = (props) => {
  const { highlightCodeColor, lineColor, ...rest } = props
  return (
    <Box
      as={"pre"}
      tabIndex={0}
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        counterReset: "line",
        code: {
          display: "grid",
          paddingX: 0,
          paddingY: 3,
          width: "max",
          minWidth: "full",
          ".line": {
            paddingX: 6,
          },
          "&[data-line-numbers]": {
            ".line": {
              paddingLeft: 1,
              paddingRight: 6,
            },
            ".line::before": {
              counterIncrement: "line",
              content: "counter(line)",
              display: "inline-block",
              width: 1,
              marginRight: 5,
              textAlign: "right",
              color: lineColor,
            },
          },
          ".highlighted-line, .highlighted-word": {
            backgroundColor: highlightCodeColor,
            rounded: "sm",
          },
        },
      }}
      {...rest}
    />
  )
}
