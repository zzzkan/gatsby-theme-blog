import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Tag, Wrap, WrapItem } from "@chakra-ui/react"

export type TagsProps = {
  tags: readonly string[] | null
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <Wrap>
      {tags?.map((tag) => (
        <WrapItem key={tag}>
          <Link as={GatsbyLink} to={`/tags/${tag}`}>
            <Tag size={"sm"}>{tag}</Tag>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default Tags
