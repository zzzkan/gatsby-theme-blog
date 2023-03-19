import React from "react"
import { Alert, AlertDescription, type AlertProps } from "@chakra-ui/react"

export const Blockquote: React.FC<AlertProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Alert
      as={"blockquote"}
      role={"none"}
      variant={"left-accent"}
      background={"secondaryBackground"}
      borderColor={"tint"}
      rounded={"sm"}
      {...rest}
    >
      <AlertDescription maxWidth={"full"} background={"transparent"}>
        {children}
      </AlertDescription>
    </Alert>
  )
}
