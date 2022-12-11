import React from "react"
import { render } from "@testing-library/react"
import { PostCard } from "../PostCard"

describe("PostCard component", () => {
  vi.mock("../PostMetadata", () => {
    return {
      PostMetadata: vi.fn().mockImplementation(() => <div>PostMetadata</div>),
    }
  })

  vi.mock("../Tags", () => {
    return {
      Tags: vi.fn().mockImplementation(() => <div>Tags</div>),
    }
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("snapshot", () => {
    const { asFragment } = render(
      <PostCard
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={10}
        tags={["tag1", "tag2", "tag3", "tag4", "tag5"]}
        slug={"/slug"}
        title={"title"}
        featuredImage={{
          childImageSharp: { gatsbyImageData: "featuredImage" as any },
        }}
        featuredImageAlt={"featuredImageAlt"}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should not render image if featuredImage is null", () => {
    const { queryByRole, getAllByRole } = render(
      <PostCard
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={10}
        tags={["tag1", "tag2", "tag3", "tag4", "tag5"]}
        slug={"/slug"}
        title={"title"}
        featuredImage={null}
        featuredImageAlt={null}
      />
    )
    expect(queryByRole("img")).toBeNull()
    const links = getAllByRole("link")
    expect(links.length).toBe(1)
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/slug")
    })
  })

  test("should not render image if featuredImage.childImageSharp is null", () => {
    const { queryByRole, getAllByRole } = render(
      <PostCard
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={10}
        tags={["tag1", "tag2", "tag3", "tag4", "tag5"]}
        slug={"/slug"}
        title={"title"}
        featuredImage={{ childImageSharp: null }}
        featuredImageAlt={null}
      />
    )
    expect(queryByRole("img")).toBeNull()
    const links = getAllByRole("link")
    expect(links.length).toBe(1)
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/slug")
    })
  })

  test("should render image if featuredImage is not null", () => {
    const { queryByRole, getAllByRole } = render(
      <PostCard
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={10}
        tags={["tag1", "tag2", "tag3", "tag4", "tag5"]}
        slug={"/slug"}
        title={"title"}
        featuredImage={{
          childImageSharp: { gatsbyImageData: "featuredImage" as any },
        }}
        featuredImageAlt={null}
      />
    )
    expect(queryByRole("img")).toHaveAttribute("src", "featuredImage")
    const links = getAllByRole("link")
    expect(links.length).toBe(2)
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/slug")
    })
  })

  test("should render default alt text if featuredImageAlt is null", () => {
    const { getByAltText } = render(
      <PostCard
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={10}
        tags={["tag1", "tag2", "tag3", "tag4", "tag5"]}
        slug={"/slug"}
        title={"title"}
        featuredImage={{
          childImageSharp: { gatsbyImageData: "featuredImage" as any },
        }}
        featuredImageAlt={null}
      />
    )
    expect(getByAltText("Featured image")).toBeInTheDocument()
  })

  test("should render custom alt text if featuredImageAlt is not null", () => {
    const { getByAltText } = render(
      <PostCard
        publishedDate={"2022/01/01"}
        updatedDate={"2022/01/02"}
        publishedDateISO8601={"2022-01-01"}
        updatedDateISO8601={"2022-01-02"}
        timeToReadMinutes={10}
        tags={["tag1", "tag2", "tag3", "tag4", "tag5"]}
        slug={"/slug"}
        title={"title"}
        featuredImage={{
          childImageSharp: { gatsbyImageData: "featuredImage" as any },
        }}
        featuredImageAlt={"custom featured image alt"}
      />
    )
    expect(getByAltText("custom featured image alt")).toBeInTheDocument()
  })
})
