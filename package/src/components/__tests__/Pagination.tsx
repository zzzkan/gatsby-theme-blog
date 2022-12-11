import React from "react"
import { render } from "@testing-library/react"
import { Pagination } from "../Pagination"

describe("Pagination component", () => {
  test("snapshot", () => {
    const { asFragment } = render(
      <Pagination basePath={"/"} totalPage={10} currentPage={5} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should not render anything if totalPage < 2", () => {
    const { container } = render(
      <Pagination basePath={"/"} totalPage={1} currentPage={1} />
    )
    expect(container.firstChild).toBeNull()
  })

  test("should not render anything if currentPage < 1", () => {
    const { container } = render(
      <Pagination basePath={"/"} totalPage={10} currentPage={0} />
    )
    expect(container.firstChild).toBeNull()
  })

  test("should not render '<' if currentPage == 1", () => {
    const { queryByText } = render(
      <Pagination basePath={"/"} totalPage={10} currentPage={1} />
    )
    expect(queryByText("<")).toBeNull()
    expect(queryByText("0")).toBeNull()
    expect(queryByText("1")).not.toHaveAttribute("href", "/")
    expect(queryByText("2")).toHaveAttribute("href", "/2")
    expect(queryByText("3")).toHaveAttribute("href", "/3")
    expect(queryByText("4")).toBeNull()
    expect(queryByText(">")).toHaveAttribute("href", "/2")
  })

  test("should render '<' if currentPage > 1", () => {
    const { queryByText } = render(
      <Pagination basePath={"/"} totalPage={10} currentPage={2} />
    )
    expect(queryByText("<")).toHaveAttribute("href", "/")
    expect(queryByText("0")).toBeNull()
    expect(queryByText("1")).toHaveAttribute("href", "/")
    expect(queryByText("2")).not.toHaveAttribute("href", "/2")
    expect(queryByText("3")).toHaveAttribute("href", "/3")
    expect(queryByText("4")).toHaveAttribute("href", "/4")
    expect(queryByText("5")).toBeNull()
    expect(queryByText(">")).toHaveAttribute("href", "/3")
  })

  test("should render '>' if currentPage < totalPage", () => {
    const { queryByText } = render(
      <Pagination basePath={"/base/"} totalPage={10} currentPage={9} />
    )
    expect(queryByText("<")).toHaveAttribute("href", "/base/8")
    expect(queryByText("6")).toBeNull()
    expect(queryByText("7")).toHaveAttribute("href", "/base/7")
    expect(queryByText("8")).toHaveAttribute("href", "/base/8")
    expect(queryByText("9")).not.toHaveAttribute("href", "/base/9")
    expect(queryByText("10")).toHaveAttribute("href", "/base/10")
    expect(queryByText("11")).toBeNull()
    expect(queryByText(">")).toHaveAttribute("href", "/base/10")
  })

  test("should not render '>' if currentPage == totalPage", () => {
    const { queryByText } = render(
      <Pagination basePath={"/base"} totalPage={10} currentPage={10} />
    )
    expect(queryByText("<")).toHaveAttribute("href", "/base/9")
    expect(queryByText("7")).toBeNull()
    expect(queryByText("8")).toHaveAttribute("href", "/base/8")
    expect(queryByText("9")).toHaveAttribute("href", "/base/9")
    expect(queryByText("10")).not.toHaveAttribute("href", "/base/10")
    expect(queryByText("11")).toBeNull()
    expect(queryByText(">")).toBeNull()
  })

  test("should not render anything if totalPage totalPage", () => {
    const { container } = render(
      <Pagination basePath={"/"} totalPage={10} currentPage={11} />
    )
    expect(container.firstChild).toBeNull()
  })
})
