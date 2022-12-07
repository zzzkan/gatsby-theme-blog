import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Tag, Wrap, WrapItem } from "@chakra-ui/react"

export type TagsProps = {
  tags: readonly string[] | null
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  if (tags == null || tags.length === 0) return null
  return (
    <Wrap>
      {tags.map((tag) => (
        <WrapItem key={tag}>
          <Link
            as={GatsbyLink}
            to={`/tags/${tag}`}
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

export default Tags
