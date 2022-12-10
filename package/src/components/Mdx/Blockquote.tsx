import React from "react"
import { Alert, AlertDescription, AlertProps } from "@chakra-ui/react"

export const Blockquote: React.FC<AlertProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Alert as={"blockquote"} role={"none"} variant={"left-accent"} {...rest}>
      <AlertDescription maxWidth={"full"} background={"transparent"}>
        {children}
      </AlertDescription>
    </Alert>
  )
}
