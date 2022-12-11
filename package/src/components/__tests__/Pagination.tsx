import React from "react"
import { render } from "@testing-library/react"
import { Pagination } from "../Pagination"
import { useThemeOption } from "../../hooks/useThemeOption"

describe("Pagination component", () => {
  vi.mock("../../hooks/useThemeOption")
  const mockUseThemeOption = useThemeOption as jest.Mock

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("snapshot", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { asFragment } = render(<Pagination totalPage={10} currentPage={5} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("should not render anything if totalPage < 2", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { container } = render(<Pagination totalPage={1} currentPage={1} />)
    expect(container.firstChild).toBeNull()
  })

  test("should not render anything if currentPage < 1", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { container } = render(<Pagination totalPage={10} currentPage={0} />)
    expect(container.firstChild).toBeNull()
  })

  test("should not render '<' if currentPage == 1", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { queryByText } = render(
      <Pagination totalPage={10} currentPage={1} />
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
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { queryByText } = render(
      <Pagination prefix={"prefix"} totalPage={10} currentPage={2} />
    )
    expect(queryByText("<")).toHaveAttribute("href", "/prefix")
    expect(queryByText("0")).toBeNull()
    expect(queryByText("1")).toHaveAttribute("href", "/prefix")
    expect(queryByText("2")).not.toHaveAttribute("href", "/prefix/2")
    expect(queryByText("3")).toHaveAttribute("href", "/prefix/3")
    expect(queryByText("4")).toHaveAttribute("href", "/prefix/4")
    expect(queryByText("5")).toBeNull()
    expect(queryByText(">")).toHaveAttribute("href", "/prefix/3")
  })

  test("should render '>' if currentPage < totalPage", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/base" }
    })
    const { queryByText } = render(
      <Pagination totalPage={10} currentPage={9} />
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
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/base" }
    })
    const { queryByText } = render(
      <Pagination prefix={"prefix"} totalPage={10} currentPage={10} />
    )
    expect(queryByText("<")).toHaveAttribute("href", "/base/prefix/9")
    expect(queryByText("7")).toBeNull()
    expect(queryByText("8")).toHaveAttribute("href", "/base/prefix/8")
    expect(queryByText("9")).toHaveAttribute("href", "/base/prefix/9")
    expect(queryByText("10")).not.toHaveAttribute("href", "/base/prefix/10")
    expect(queryByText("11")).toBeNull()
    expect(queryByText(">")).toBeNull()
  })

  test("should not render anything if totalPage totalPage", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { container } = render(<Pagination totalPage={10} currentPage={11} />)
    expect(container.firstChild).toBeNull()
  })
})
