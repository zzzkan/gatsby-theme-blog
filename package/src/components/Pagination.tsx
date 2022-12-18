import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, HStack, Link } from "@chakra-ui/react"
import { useThemeOption } from "../hooks/useThemeOption"

export type PaginationProps = {
  readonly prefix?: string
  readonly totalPage: number
  readonly currentPage: number
}

const width = 2

export const Pagination: React.FC<PaginationProps> = ({
  prefix,
  totalPage,
  currentPage,
}) => {
  const { basePath } = useThemeOption()
  const basePrefixPath = `${basePath}/${prefix ?? ""}`.replace(/\/\/+/g, "/")
  const pages = [...Array(2 * width + 1)]
    .map((_, i) => i + currentPage - width)
    .filter((page) => page >= 1 && page <= totalPage)
  if (pages.length < 2 || !pages.includes(currentPage)) return null
  const path = (page: number): string => {
    if (page === 1) return basePrefixPath
    return `${basePrefixPath}/${page}`.replace(/\/\/+/g, "/")
  }
  return (
    <HStack spacing={3} fontSize={"xl"}>
      {currentPage !== 1 && (
        <Link
          as={GatsbyLink}
          to={path(currentPage - 1)}
          aria-label={"Transition to previous page"}
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
            aria-label={`Transition to ${page} page`}
          >
            {page}
          </Link>
        )
      })}
      {currentPage !== totalPage && (
        <Link
          as={GatsbyLink}
          to={path(currentPage + 1)}
          aria-label={"Transition to next page"}
        >
          {">"}
        </Link>
      )}
    </HStack>
  )
}
