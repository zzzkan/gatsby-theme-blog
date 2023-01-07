import React from "react"
import { render } from "@testing-library/react"
import { Copyright } from "../Copyright"

describe("Copyright component", () => {
  test("snapshot", () => {
    const { asFragment } = render(
      <Copyright author={"author"} publicationYear={9999} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should be formatted as '© year author'", () => {
    const { getByText } = render(
      <Copyright author={"author"} publicationYear={9999} />
    )
    expect(getByText("© 9999 author")).toBeInTheDocument()
  })
})
