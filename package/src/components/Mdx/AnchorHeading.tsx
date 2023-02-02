import React from "react"
import { Heading, type HeadingProps } from "@chakra-ui/react"

export const AnchorHeading: React.FC<HeadingProps> = (props) => {
  return (
    <Heading
      sx={{
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
      }}
      {...props}
    />
  )
}
