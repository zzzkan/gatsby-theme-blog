import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, HStack, Link } from "@chakra-ui/react"
import { type PaginationType } from "../types/paginationType"

type Props = PaginationType

export const Pagination: React.FC<Props> = ({
  currentPath,
  currentPage,
  totalPage,
}) => {
  const width = 2
  const pages = [...Array(2 * width + 1)]
    .map((_, i) => i + currentPage - width)
    .filter((page) => page >= 1 && page <= totalPage)
  if (pages.length < 2 || !pages.includes(currentPage)) return null
  const basePath = currentPath.replace(/\/[2-9]\/*$/, "")
  const path = (page: number): string => {
    return page === 1 ? basePath : `${basePath}/${page}`.replace(/\/\/+/g, "/")
  }
  return (
    <HStack spacing={3} fontSize={"xl"}>
      {currentPage !== 1 && (
        <Link
          as={GatsbyLink}
          to={path(currentPage - 1)}
          aria-label={"Move to previous page"}
        >
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
          <Link
            key={page}
            as={GatsbyLink}
            to={path(page)}
            aria-label={`Move to ${page} page`}
          >
            {page}
          </Link>
        )
      })}
      {currentPage !== totalPage && (
        <Link
          as={GatsbyLink}
          to={path(currentPage + 1)}
          aria-label={"Move to next page"}
        >
          {">"}
        </Link>
      )}
    </HStack>
  )
}
