import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"

const Pre: React.FC<BoxProps> = (props) => {
  return (
    <Box
      as={"pre"}
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        code: {
          display: "grid",
          paddingX: 6,
          paddingY: 3,
          width: "max",
          minWidth: "full",
        },
      }}
      {...props}
    />
  )
}

export default Pre
