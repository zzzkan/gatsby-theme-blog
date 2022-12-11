import { vi } from "vitest"
import React from "react"
import "@testing-library/jest-dom"

vi.mock("gatsby", () => {
  return {
    Link: vi.fn().mockImplementation(({ to, ...rest }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
    ),
  }
})

vi.mock("gatsby-plugin-image", () => {
  return {
    GatsbyImage: vi.fn().mockImplementation(({ image, ...rest }) =>
      React.createElement("img", {
        ...rest,
        src: image,
      })
    ),
  }
})
