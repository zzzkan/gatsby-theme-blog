import React from "react"
import {
  Code as ChakraCode,
  CodeProps,
  useColorModeValue,
} from "@chakra-ui/react"

const Code: React.FC<CodeProps> = (props) => {
  const style = useColorModeValue(
    {
      "&[data-theme=dark]": {
        display: "none",
      },
    },
    {
      "&[data-theme=light]": {
        display: "none",
      },
    }
  )
  return <ChakraCode as={"code"} sx={style} {...props} />
}

export default Code
