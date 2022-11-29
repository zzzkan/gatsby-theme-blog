import React, { ReactNode } from "react"
import { Box } from "@chakra-ui/react"
import Header, { HeaderProps } from "./Header"
import Footer from "./Footer"
import { Mdx } from "../Mdx"

export type PostProps = {
  children: ReactNode
  post: HeaderProps
}

const Post: React.FC<PostProps> = ({ children, post }) => {
  return (
    <Box as={"article"}>
      <Header {...post} />
      <Box as={"section"} marginBottom={9}>
        <Mdx>{children}</Mdx>
      </Box>
      <Footer />
    </Box>
  )
}

export default Post
