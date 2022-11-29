import React from "react"
import { Text } from "@chakra-ui/react"
import { useSiteMetadata } from "../../../hooks/useSiteMetadata"

const Copyright: React.FC = () => {
  const { author } = useSiteMetadata()
  return (
    <Text as={"div"} fontSize={"sm"}>
      © 2022 {author}
    </Text>
  )
}

export default Copyright
