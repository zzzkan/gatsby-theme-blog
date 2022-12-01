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
      sx={
        isDarkMode
          ? {
              "&[data-theme=light]": {
                display: "none",
              },
            }
          : {
              "&[data-theme=dark]": {
                display: "none",
              },
            }
      }
      {...props}
    />
  )
}

export default Code
