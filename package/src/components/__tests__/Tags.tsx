import React from "react"
import { render } from "@testing-library/react"
import { Tags } from "../Tags"

describe("Tags component", () => {
  test("snapshot", () => {
    const { asFragment } = render(
      <Tags
        tags={[
          { slug: "/tags/tag1", name: "tag1" },
          { slug: "/tags/tag2", name: "tag2" },
          { slug: "/tags/tag3", name: "tag3" },
          { slug: "/tags/tag4", name: "tag4" },
          { slug: "/tags/tag5", name: "tag5" },
        ]}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should not render anything if props is null", () => {
    const { container } = render(<Tags tags={null} />)
    expect(container.firstChild).toBeNull()
  })

  test("should not render anything if props is []", () => {
    const { container } = render(<Tags tags={[]} />)
    expect(container.firstChild).toBeNull()
  })

  test("should render tag as /tags/* link", () => {
    const { getByRole } = render(
      <Tags tags={[{ slug: "/tags/tag", name: "tag" }]} />
    )
    expect(getByRole("link")).toHaveAttribute("href", "/tags/tag")
  })

  test("should render tag as /base/tags/* link", () => {
    const { getByRole } = render(
      <Tags tags={[{ slug: "/base/tags/tag", name: "tag" }]} />
    )
    expect(getByRole("link")).toHaveAttribute("href", "/base/tags/tag")
  })

  test("should render multiple tag", () => {
    const { getAllByRole } = render(
      <Tags
        tags={[
          { slug: "/tags/tag1", name: "tag1" },
          { slug: "/tags/tag2", name: "tag2" },
          { slug: "/tags/tag3", name: "tag3" },
          { slug: "/tags/tag4", name: "tag4" },
          { slug: "/tags/tag5", name: "tag5" },
          { slug: "/tags/tag6", name: "tag6" },
          { slug: "/tags/tag7", name: "tag7" },
          { slug: "/tags/tag8", name: "tag8" },
          { slug: "/tags/tag9", name: "tag9" },
          { slug: "/tags/tag10", name: "tag10" },
        ]}
      />
    )
    expect(getAllByRole("link").length).toBe(10)
  })
})
