import React from "react"
import { render } from "@testing-library/react"
import { Title } from "../Title"

describe("Title component", () => {
  test("snapshot", () => {
    const { asFragment } = render(<Title title={"title"} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("should render home link", () => {
    const { getByText } = render(<Title title={"title"} />)
    expect(getByText("title")).toHaveAttribute("href", "/")
  })
})
