import { vi } from "vitest"
import React from "react"
import { createSerializer } from "@emotion/jest"
import "@testing-library/jest-dom"

expect.addSnapshotSerializer(createSerializer())

vi.mock("gatsby", () => {
  return {
    Link: vi.fn().mockImplementation(({ to, ...rest }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
    ),
    graphql: vi.fn(),
    useStaticQuery: vi.fn().mockImplementation(() => {
      return {
        themeOption: {
          lang: "en",
        },
      }
    }),
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
