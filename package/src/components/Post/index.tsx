import React, { ReactNode } from "react"
import { Box } from "@chakra-ui/react"
import Header, { HeaderProps } from "./Header"
import Footer from "./Footer"
import { MdxComponentsWrapper } from "./MdxComponentsWrapper"

export type PostProps = {
  children: ReactNode
  post: HeaderProps
}

const Post: React.FC<PostProps> = ({ children, post }) => {
  return (
    <Box as={"article"}>
      <Header {...post} />
      <Box as={"section"}>
        <MdxComponentsWrapper>{children}</MdxComponentsWrapper>
      </Box>
      <Footer />
    </Box>
  )
}

export default Post
