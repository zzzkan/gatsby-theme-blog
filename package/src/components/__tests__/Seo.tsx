import React from "react"
import { render } from "@testing-library/react"
import { Seo } from "../Seo"

describe("Seo component", () => {
  vi.mock("../../hooks/useSiteMetadata", () => {
    return {
      useSiteMetadata: vi.fn().mockImplementation(() => {
        return {
          title: "siteTitle",
          siteUrl: "siteUrl",
          description: "siteDescription",
          author: "siteAuthor",
          image: "siteImage",
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

  test("snapshot with no props", () => {
    const { asFragment } = render(<Seo />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("snapshot with props", () => {
    const { asFragment } = render(
      <Seo
        path={"pagePath"}
        title={"pageTitle"}
        description={"pageDescription"}
        publishedDate={"pagePublishedDate"}
        updatedDate={"pageUpdatedDate"}
        image={"pageImage"}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
