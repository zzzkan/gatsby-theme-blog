import React from "react"
import { Box } from "@chakra-ui/react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Mdx } from "../Mdx"

type Props = {
  readonly children: React.ReactNode
} & Queries.PostTemplateQuery

export const Post: React.FC<Props> = ({ children, post, previous, next }) => {
  if (post == null) return <Box>Not Found ...</Box>
  return (
    <Box as={"article"}>
      <Header {...post} />
      <Box as={"section"} marginBottom={9}>
        <Mdx>{children}</Mdx>
      </Box>
      <Footer
        relatedPosts={post.relatedPosts}
        previous={previous}
        next={next}
      />
    </Box>
  )
}
