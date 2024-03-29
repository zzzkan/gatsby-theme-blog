import React from "react"
import { HStack, IconButton } from "@chakra-ui/react"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { FaRss } from "@react-icons/all-files/fa/FaRss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"

const Icon: React.FC<{ name: string }> = ({ name }) => {
  if (name === "GitHub") return <FaGithub />
  if (name === "Twitter") return <FaTwitter />
  if (name === "RSS") return <FaRss />
  return <FaLink />
}

type Props = {
  readonly links: Array<{
    readonly name: string
    readonly url: string
  }>
}

export const ExternalLinks: React.FC<Props> = ({ links }) => {
  if (links == null || links.length === 0) return null
  return (
    <HStack spacing={1}>
      {links.map((link, index) => (
        <IconButton
          key={`${link.name}-${index}`}
          aria-label={link.name}
          as={"a"}
          href={link.url}
          target={"_blank"}
          rel={"noreferrer"}
          variant={"ghost"}
          isRound={true}
          size={"xs"}
          fontSize={"xl"}
          icon={<Icon name={link.name} />}
        />
      ))}
    </HStack>
  )
}
