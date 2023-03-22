import React from "react"
import { Box } from "@chakra-ui/react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Mdx } from "../Mdx"

type Props = {
  readonly children: React.ReactNode
} & Queries.PostTemplateQuery

export const Post: React.FC<Props> = ({ children, post }) => {
  if (post == null) return <Box>Not Found ...</Box>
  return (
    <>
      <Header {...post} />
      <Box as={"section"} marginBottom={9}>
        <Mdx>{children}</Mdx>
      </Box>
      <Footer {...post} />
    </>
  )
}
