import React from "react"
import { Box, Icon, Wrap, WrapItem } from "@chakra-ui/react"
import { BiCalendar } from "@react-icons/all-files/bi/BiCalendar"
import { BiCalendarEdit } from "@react-icons/all-files/bi/BiCalendarEdit"
import { BiTime } from "@react-icons/all-files/bi/BiTime"

type Props = {
  readonly publishedDate: string
  readonly updatedDate?: string | null
  readonly publishedDateISO8601: string
  readonly updatedDateISO8601?: string | null
  readonly timeToReadMinutes?: number | null
}

export const PostMetadata: React.FC<Props> = (post) => {
  return (
    <Wrap color={"secondaryText"} fontSize={"sm"} spacingX={1} spacingY={0}>
      <WrapItem>
        <Icon as={BiCalendar} fontSize={"md"} margin={"auto"} />
        <Box as={"time"} dateTime={post.publishedDateISO8601}>
          {post.publishedDate}
        </Box>
      </WrapItem>
      {post.updatedDate != null && post.updatedDateISO8601 != null && (
        <WrapItem>
          <Icon as={BiCalendarEdit} fontSize={"md"} margin={"auto"} />
          <Box as={"time"} dateTime={post.updatedDateISO8601}>
            {post.updatedDate}
          </Box>
        </WrapItem>
      )}
      {post.timeToReadMinutes != null && (
        <WrapItem>
          <Icon as={BiTime} fontSize={"md"} margin={"auto"} />
          <Box as={"span"}>{Math.ceil(post.timeToReadMinutes)}min</Box>
        </WrapItem>
      )}
    </Wrap>
  )
}
