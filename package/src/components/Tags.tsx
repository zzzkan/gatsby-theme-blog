import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Tag, Wrap, WrapItem } from "@chakra-ui/react"
import { useMultilingualSentence } from "../hooks/useMultilingualSentence"

type Props = {
  readonly tags: ReadonlyArray<{
    readonly slug: string
    readonly name: string
  }>
}

export const Tags: React.FC<Props> = ({ tags }) => {
  const { movePageSentence } = useMultilingualSentence()
  if (tags.length === 0) return null
  return (
    <Wrap>
      {tags.map((tag) => (
        <WrapItem key={tag.slug}>
          <Link
            as={GatsbyLink}
            to={tag.slug}
            aria-label={movePageSentence(tag.slug)}
            _hover={{ textDecoration: "none" }}
          >
            <Tag
              size={"sm"}
              variant={"solid"}
              color={"onTintText"}
              background={"tint"}
            >
              {tag.name}
            </Tag>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  )
}
