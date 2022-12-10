import React from "react"
import { Text } from "@chakra-ui/react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const Copyright: React.FC = () => {
  const { author, publicationYear } = useSiteMetadata()
  return (
    <Text as={"div"} fontSize={"sm"}>
      © {publicationYear} {author}
    </Text>
  )
}
