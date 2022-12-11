import React from "react"
import { render } from "@testing-library/react"
import { Title } from "../Title"

describe("Title component", () => {
  vi.mock("../../hooks/useSiteMetadata", () => {
    return {
      useSiteMetadata: vi.fn().mockImplementation(() => {
        return {
          title: "title",
        }
      }),
    }
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("snapshot", () => {
    const { asFragment } = render(<Title />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("should render home link", () => {
    const { getByText } = render(<Title />)
    expect(getByText("title")).toHaveAttribute("href", "/")
  })
})
