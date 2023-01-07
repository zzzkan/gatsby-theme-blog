import React from "react"
import { Text } from "@chakra-ui/react"

export type CopyrightProps = {
  readonly author: string
  readonly publicationYear: number
}

export const Copyright: React.FC<CopyrightProps> = ({
  author,
  publicationYear,
}) => {
  return (
    <Text as={"div"} fontSize={"sm"}>
      © {publicationYear} {author}
    </Text>
  )
}
