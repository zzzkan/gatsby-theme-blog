import React from "react"
import { render } from "@testing-library/react"
import { PostCardList } from "../PostCardList"

describe("PostCardList component", () => {
  vi.mock("../PostCard", () => {
    return {
      PostCard: vi.fn().mockImplementation(() => <div>PostCard</div>),
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
      <PostCardList
        posts={[{ slug: "post1" }, { slug: "post2" }, { slug: "post3" }] as any}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should not render anything if props is null", () => {
    const { container } = render(<PostCardList posts={null} />)
    expect(container.firstChild).toBeNull()
  })

  test("should not render anything if props is []", () => {
    const { container } = render(<PostCardList posts={[]} />)
    expect(container.firstChild).toBeNull()
  })

  test("should render multiple post card", () => {
    const { getAllByText } = render(
      <PostCardList
        posts={[{ slug: "post1" }, { slug: "post2" }, { slug: "post3" }] as any}
      />
    )
    expect(getAllByText("PostCard").length).toBe(3)
  })
})
