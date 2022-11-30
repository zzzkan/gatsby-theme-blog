import React from "react"
import {
  Code as ChakraCode,
  CodeProps,
  useColorModeValue,
} from "@chakra-ui/react"

const Code: React.FC<CodeProps> = (props) => {
  const isDarkMode = useColorModeValue(false, true)
  return (
    <ChakraCode
      as={"code"}
      sx={{
        "&[data-theme=light]": {
          display: isDarkMode ? "none" : "inherit",
        },
        "&[data-theme=dark]": {
          display: isDarkMode ? "inherit" : "none",
        },
        ".highlighted-line, .highlighted-word": {
          backgroundColor: "RGBA(255, 255, 0, 0.08)",
          rounded: "sm",
        },
      }}
      {...props}
    />
  )
}

export default Code
