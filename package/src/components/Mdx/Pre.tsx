import React from "react"
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react"

const Pre: React.FC<BoxProps> = (props) => {
  const isDarkMode = useColorModeValue(false, true)
  return (
    <Box
      as={"pre"}
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        "&[data-theme=light]": {
          display: isDarkMode ? "none" : "inherit",
        },
        "&[data-theme=dark]": {
          display: isDarkMode ? "inherit" : "none",
        },
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
