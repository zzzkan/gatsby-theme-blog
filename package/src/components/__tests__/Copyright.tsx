import React from "react"
import { render } from "@testing-library/react"
import { Copyright } from "../Copyright"

describe("Copyright component", () => {
  vi.mock("../../hooks/useSiteMetadata", () => {
    return {
      useSiteMetadata: vi.fn().mockImplementation(() => {
        return {
          author: "author",
          publicationYear: 9999,
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
    const { asFragment } = render(<Copyright />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("should be formatted as '© year author'", () => {
    const { getByText } = render(<Copyright />)
    expect(getByText("© 9999 author")).toBeInTheDocument()
  })
})
