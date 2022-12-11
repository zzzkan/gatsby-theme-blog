import React from "react"
import { render } from "@testing-library/react"
import { Tags } from "../Tags"

describe("Tags component", () => {
  test("snapshot", () => {
    const { asFragment } = render(
      <Tags tags={["tag1", "tag2", "tag3", "tag4", "tag5"]} />
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

  test("should render tag as link", () => {
    const { getByRole } = render(<Tags tags={["tag"]} />)
    expect(getByRole("link")).toHaveAttribute("href", "/tags/tag")
  })

  test("should render multiple tag", () => {
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
