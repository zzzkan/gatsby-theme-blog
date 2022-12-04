import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { HStack, Link } from "@chakra-ui/react"
import { useThemeColor } from "../hooks/useThemeColor"

export type PaginationProps = {
  readonly basePath: string
  readonly totalPage: number
  readonly currentPage: number
}

const width = 3

const Pagination: React.FC<PaginationProps> = ({
  basePath,
  totalPage,
  currentPage,
}) => {
  const { tint, primaryText } = useThemeColor()
  const pages = [...Array(2 * width + 1)]
    .map((_, i) => i + currentPage - width)
    .filter((page) => page >= 1 && page <= totalPage)
  const to = (page: number): string => {
    if (page === 1) return basePath
    return `${basePath}/${page}`.replace(/\/\/+/g, "/")
  }
  return (
    <HStack spacing={3} fontSize={"xl"}>
      {currentPage !== 1 && (
        <Link
          as={GatsbyLink}
          to={to(currentPage - 1)}
          color={primaryText}
          _hover={{ textDecoration: "none" }}
        >
          {"<"}
        </Link>
      )}
      {pages.map((page) => {
        return (
          <Link
            key={page}
            as={GatsbyLink}
            to={to(page)}
            color={page === currentPage ? tint : primaryText}
            _hover={{ textDecoration: "none" }}
          >
            {page}
          </Link>
        )
      })}
      {currentPage !== totalPage && (
        <Link
          as={GatsbyLink}
          to={to(currentPage + 1)}
          color={primaryText}
          _hover={{ textDecoration: "none" }}
        >
          {">"}
        </Link>
      )}
    </HStack>
  )
}

export default Pagination
