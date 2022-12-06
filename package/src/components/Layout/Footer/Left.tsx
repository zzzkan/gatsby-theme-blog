import React from "react"
import { Text } from "@chakra-ui/react"
import { useSiteMetadata } from "../../../hooks/useSiteMetadata"

const Left: React.FC = () => {
  const { author, publicationYear } = useSiteMetadata()
  return (
    <Text as={"div"} fontSize={"sm"}>
      © {publicationYear} {author}
    </Text>
  )
}

export default Left
