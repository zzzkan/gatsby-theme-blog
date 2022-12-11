import React from "react"
import { render } from "@testing-library/react"
import { Tags } from "../Tags"
import { useThemeOption } from "../../hooks/useThemeOption"

describe("Tags component", () => {
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
    const { asFragment } = render(
      <Tags tags={["tag1", "tag2", "tag3", "tag4", "tag5"]} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should not render anything if props is null", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { container } = render(<Tags tags={null} />)
    expect(container.firstChild).toBeNull()
  })

  test("should not render anything if props is []", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { container } = render(<Tags tags={[]} />)
    expect(container.firstChild).toBeNull()
  })

  test("should render tag as /tags/* link", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { getByRole } = render(<Tags tags={["tag"]} />)
    expect(getByRole("link")).toHaveAttribute("href", "/tags/tag")
  })

  test("should render tag as /base/tags/* link", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/base" }
    })
    const { getByRole } = render(<Tags tags={["tag"]} />)
    expect(getByRole("link")).toHaveAttribute("href", "/base/tags/tag")
  })

  test("should render multiple tag", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { basePath: "/" }
    })
    const { getAllByRole } = render(
      <Tags
        tags={[
          "tag1",
          "tag2",
          "tag3",
          "tag4",
          "tag5",
          "tag6",
          "tag7",
          "tag8",
          "tag9",
          "tag10",
        ]}
      />
    )
    expect(getAllByRole("link").length).toBe(10)
  })
})
