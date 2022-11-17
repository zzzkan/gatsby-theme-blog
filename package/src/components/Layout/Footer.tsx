import React from "react"
import { Box, Container, Link } from "@chakra-ui/react"

const Footer: React.FC = () => {
  return (
    <Box as={"footer"} position={"sticky"} top={"100vh"}>
      <Container maxWidth={"container.lg"}>
        <Box paddingTop={3}>
          © 2022 <Link href={"http://exsample.com/"}>zzzkan</Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
