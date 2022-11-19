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
import { IconType } from "@react-icons/all-files/lib"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { FaRss } from "@react-icons/all-files/fa/FaRss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import { useThemeOption } from "../../hooks/useThemeOption"

const icon = (name: string): IconType | undefined => {
  if (name === "github") return FaGithub
  if (name === "twitter") return FaTwitter
  if (name === "rss") return FaRss
  if (name === "profile") return FaLink
  return undefined
}

const Footer: React.FC = () => {
  const { author } = useSiteMetadata()
  const { links } = useThemeOption()
  return (
    <Box as={"footer"} position={"sticky"} top={"100vh"}>
      <Container maxWidth={"container.lg"}>
        <Flex paddingTop={3} alignItems={"end"}>
          <Box>© 2022 {author}</Box>
          <Spacer />
          {links?.length > 0 && (
            <HStack spacing={2}>
              {links?.map((link) => (
                <Tooltip
                  key={link.url}
                  label={link.label ?? link.name}
                  placement="top"
                >
                  <Link href={link.url} isExternal={true}>
                    <Icon as={icon(link.name)} fontSize={"2xl"} />
                  </Link>
                </Tooltip>
              ))}
            </HStack>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
