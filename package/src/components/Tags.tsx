import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Tag, Wrap, WrapItem } from "@chakra-ui/react"
import { useThemeColor } from "../hooks/useThemeColor"

export type TagsProps = {
  tags: readonly string[] | null
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  const { tint, onTintText } = useThemeColor()
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
              color={onTintText}
              background={tint}
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