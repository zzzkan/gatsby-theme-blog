import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Tag, Wrap, WrapItem } from "@chakra-ui/react"
import { useThemeOption } from "../hooks/useThemeOption"

export type TagsProps = {
  readonly tags: readonly string[] | null
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  const { basePath } = useThemeOption()
  if (tags == null || tags.length === 0) return null
  const path = (tag: string): string => {
    return `${basePath}/tags/${tag}`.replace(/\/\/+/g, "/")
  }
  return (
    <Wrap>
      {tags.map((tag) => (
        <WrapItem key={tag}>
          <Link
            as={GatsbyLink}
            to={path(tag)}
            aria-label={`Transition to tag page (${tag})`}
            _hover={{ textDecoration: "none" }}
          >
            <Tag
              size={"sm"}
              variant={"solid"}
              color={"onTintText"}
              background={"tint"}
            >
              {tag}
            </Tag>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  )
}
