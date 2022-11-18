import React from "react"
import { Box, Icon, HStack, Wrap, WrapItem } from "@chakra-ui/react"
import { BiCalendar } from "@react-icons/all-files/bi/BiCalendar"
import { BiCalendarEdit } from "@react-icons/all-files/bi/BiCalendarEdit"
import { BiTime } from "@react-icons/all-files/bi/BiTime"

export type PostMetadataProps = {
  readonly publishedDate: string
  readonly updatedDate: string | null
  readonly publishedDate_ISO8601: string
  readonly updatedDate_ISO8601: string | null
  readonly timeToReadMinutes: number | null
}

const PostMetadata: React.FC<PostMetadataProps> = (post) => {
  return (
    <Wrap spacingX={1} spacingY={0} fontSize={"sm"}>
      <WrapItem>
        <HStack spacing={0}>
          <Icon as={BiCalendar} fontSize={"md"} />
          <Box as="time" dateTime={post.publishedDate_ISO8601}>
            {post.publishedDate}
          </Box>
        </HStack>
      </WrapItem>
      {post.updatedDate != null && post.updatedDate_ISO8601 != null && (
        <WrapItem>
          <HStack spacing={0}>
            <Icon as={BiCalendarEdit} fontSize={"md"} />
            <Box as="time" dateTime={post.updatedDate_ISO8601}>
              {post.updatedDate}
            </Box>
          </HStack>
        </WrapItem>
      )}
      {post.timeToReadMinutes != null && (
        <WrapItem>
          <HStack spacing={0}>
            <Icon as={BiTime} fontSize={"md"} />
            <Box as="span">{Math.ceil(post.timeToReadMinutes)}min</Box>
          </HStack>
        </WrapItem>
      )}
    </Wrap>
  )
}

export default PostMetadata
