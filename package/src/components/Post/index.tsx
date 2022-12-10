import React from "react"
import { Box } from "@chakra-ui/react"
import { Header, HeaderProps } from "./Header"
import { Footer, FooterProps } from "./Footer"
import { Mdx } from "../Mdx"

export type PostProps = {
  children: React.ReactNode
  post: HeaderProps & FooterProps
}

export const Post: React.FC<PostProps> = ({ children, post }) => {
  return (
    <Box as={"article"}>
      <Header {...post} />
      <Box as={"section"} marginBottom={9}>
        <Mdx>{children}</Mdx>
      </Box>
      <Footer {...post} />
    </Box>
  )
}
