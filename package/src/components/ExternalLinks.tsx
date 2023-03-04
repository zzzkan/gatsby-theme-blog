import React from "react"
import { HStack, Icon, Link, Tooltip } from "@chakra-ui/react"
import { type IconType } from "@react-icons/all-files/lib"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { FaRss } from "@react-icons/all-files/fa/FaRss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"

const icon = (name: string): IconType => {
  if (name === "GitHub") return FaGithub
  if (name === "Twitter") return FaTwitter
  if (name === "RSS") return FaRss
  return FaLink
}

type Props = {
  readonly links: Array<{
    readonly name: string
    readonly url: string
    readonly label?: string
  }>
}

export const ExternalLinks: React.FC<Props> = ({ links }) => {
  if (links == null || links.length === 0) return null
  return (
    <HStack spacing={2}>
      {links.map((link, index) => (
        <Tooltip
          key={`${link.name}-${index}`}
          label={link.label ?? link.name}
          placement={"top"}
          color={"inherit"}
          background={"secondaryBackground"}
        >
          <Link
            href={link.url}
            aria-label={`Move to ${link.label ?? link.name}`}
            _hover={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Icon as={icon(link.name)} fontSize={"2xl"} />
          </Link>
        </Tooltip>
      ))}
    </HStack>
  )
}
