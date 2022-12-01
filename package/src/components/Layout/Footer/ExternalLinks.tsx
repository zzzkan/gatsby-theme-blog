import React from "react"
import { HStack, Icon, Link, Tooltip } from "@chakra-ui/react"
import { IconType } from "@react-icons/all-files/lib"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { FaRss } from "@react-icons/all-files/fa/FaRss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { useThemeOption } from "../../../hooks/useThemeOption"
import { useThemeColor } from "../../../hooks/useThemeColor"

const icon = (name: string): IconType | undefined => {
  if (name === "GitHub") return FaGithub
  if (name === "Twitter") return FaTwitter
  if (name === "RSS") return FaRss
  if (name === "Profile") return FaLink
  return undefined
}

const ExternalLinks: React.FC = () => {
  const { links } = useThemeOption()
  const { secondaryBackground } = useThemeColor()
  return (
    <HStack spacing={2}>
      {links?.map((link) => (
        <Tooltip
          key={link.url}
          label={link.label ?? link.name}
          placement={"top"}
          color={"inherit"}
          background={secondaryBackground}
        >
          <Link
            href={link.url}
            aria-label={link.label ?? link.name}
            _hover={{ textDecoration: "none" }}
          >
            <Icon as={icon(link.name)} fontSize={"2xl"} />
          </Link>
        </Tooltip>
      ))}
    </HStack>
  )
}

export default ExternalLinks
