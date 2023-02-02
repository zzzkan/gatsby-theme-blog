import React from "react"
import { Code as ChakraCode, type CodeProps } from "@chakra-ui/react"

export const Code: React.FC<CodeProps> = (props) => {
  return <ChakraCode as={"code"} {...props} />
}
