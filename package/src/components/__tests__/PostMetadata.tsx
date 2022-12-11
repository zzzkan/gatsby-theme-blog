import React from "react"
import { render } from "@testing-library/react"
import { PostMetadata } from "../PostMetadata"

describe("PostMetadata component", () => {
  test("snapshot", () => {
    const { asFragment } = render(
      <PostMetadata
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={10}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should render published date as text content, published date (ISO8601) as datetime attribute", () => {
    const { queryByText } = render(
      <PostMetadata
        publishedDate={"2022/01/01"}
        updatedDate={null}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={null}
        timeToReadMinutes={null}
      />
    )
    expect(queryByText("2022/01/01")).toHaveAttribute("datetime", "2022-01-01")
    expect(queryByText("2022-01-01")).toBeNull()
  })

  test("should not render updated date", () => {
    const { queryByText } = render(
      <PostMetadata
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={null}
        timeToReadMinutes={null}
      />
    )
    expect(queryByText("2022/01/02")).toBeNull()
  })

  test("should not render updated date (ISO8601)", () => {
    const { queryByText } = render(
      <PostMetadata
        publishedDate={"2022/01/01"}
        updatedDate={null}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={null}
      />
    )
    expect(queryByText("2022-01-02")).toBeNull()
  })

  test("should render updated date as text content, updated date (ISO8601) as datetime attribute", () => {
    const { queryByText } = render(
      <PostMetadata
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={null}
      />
    )
    expect(queryByText("2022/01/02")).toHaveAttribute("datetime", "2022-01-02")
    expect(queryByText("2022-01-02")).toBeNull()
  })

  test("should render time to read on text content", () => {
    const { queryByText } = render(
      <PostMetadata
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={99}
      />
    )
    expect(queryByText("99min")).toBeInTheDocument()
  })
})
