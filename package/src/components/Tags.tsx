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
          <Link
            as={GatsbyLink}
            to={`/tags/${tag}`}
            _hover={{ textDecoration: "none" }}
          >
            <Tag
              size={"sm"}
              variant={"solid"}
              color={"base.900"}
              background={"brand.200"}
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
