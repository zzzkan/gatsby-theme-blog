import React from "react"
import { Text } from "@chakra-ui/react"

type Props = {
  readonly author: string
  readonly publicationYear: number
}

export const Copyright: React.FC<Props> = ({ author, publicationYear }) => {
  return (
    <Text as={"div"} fontSize={"sm"}>
      © {publicationYear} {author}
    </Text>
  )
}
