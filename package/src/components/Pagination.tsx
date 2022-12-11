import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, HStack, Link } from "@chakra-ui/react"

export type PaginationProps = {
  readonly basePath: string
  readonly totalPage: number
  readonly currentPage: number
}

const width = 2

export const Pagination: React.FC<PaginationProps> = ({
  basePath,
  totalPage,
  currentPage,
}) => {
  const pages = [...Array(2 * width + 1)]
    .map((_, i) => i + currentPage - width)
    .filter((page) => page >= 1 && page <= totalPage)
  if (pages.length < 2 || !pages.includes(currentPage)) return null
  const path = (page: number): string => {
    if (page === 1) return basePath
    return `${basePath}/${page}`.replace(/\/\/+/g, "/")
  }
  return (
    <HStack spacing={3} fontSize={"xl"}>
      {currentPage !== 1 && (
        <Link as={GatsbyLink} to={path(currentPage - 1)}>
          {"<"}
        </Link>
      )}
      {pages.map((page) => {
        if (page === currentPage) {
          return (
            <Box key={page} as={"span"} color={"tint"}>
              {page}
            </Box>
          )
        }
        return (
          <Link key={page} as={GatsbyLink} to={path(page)}>
            {page}
          </Link>
        )
      })}
      {currentPage !== totalPage && (
        <Link as={GatsbyLink} to={path(currentPage + 1)}>
          {">"}
        </Link>
      )}
    </HStack>
  )
}
