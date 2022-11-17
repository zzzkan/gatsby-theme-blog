import React from "react"
import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  Spacer,
  Tooltip,
} from "@chakra-ui/react"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { FaRss } from "@react-icons/all-files/fa/FaRss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

const Footer: React.FC = () => {
  const { author } = useSiteMetadata()
  return (
    <Box as={"footer"} position={"sticky"} top={"100vh"}>
      <Container maxWidth={"container.lg"}>
        <Flex paddingTop={3} alignItems={"end"}>
          <Box>© 2022 {author}</Box>
          <Spacer />
          <HStack spacing={2}>
            <Tooltip label="Github" placement="top">
              <Link href={"/"} isExternal={true}>
                <Icon as={FaGithub} fontSize={"2xl"} />
              </Link>
            </Tooltip>
            <Tooltip label="Twitter" placement="top">
              <Link href={"/"} isExternal={true}>
                <Icon as={FaTwitter} fontSize={"2xl"} />
              </Link>
            </Tooltip>
            <Tooltip label="Author page" placement="top">
              <Link href={"/"} isExternal={true}>
                <Icon as={FaLink} fontSize={"2xl"} />
              </Link>
            </Tooltip>
            <Tooltip label="RSS" placement="top">
              <Link href={"/"} isExternal={true}>
                <Icon as={FaRss} fontSize={"2xl"} />
              </Link>
            </Tooltip>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
