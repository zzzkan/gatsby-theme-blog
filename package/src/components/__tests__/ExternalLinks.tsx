import React from "react"
import { render } from "@testing-library/react"
import { ExternalLinks } from "../ExternalLinks"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { FaRss } from "@react-icons/all-files/fa/FaRss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"

describe("ExternalLinks component", () => {
  vi.mock("@react-icons/all-files/fa/FaLink")
  vi.mock("@react-icons/all-files/fa/FaRss")
  vi.mock("@react-icons/all-files/fa/FaGithub")
  vi.mock("@react-icons/all-files/fa/FaTwitter")

  const mockFaLink = FaLink as jest.Mock
  const mockFaRss = FaRss as jest.Mock
  const mockFaGithub = FaGithub as jest.Mock
  const mockFaTwitter = FaTwitter as jest.Mock

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("snapshot", () => {
    const { asFragment } = render(
      <ExternalLinks
        links={[
          {
            name: "Profile",
            url: "/profile",
          },
          {
            name: "RSS",
            url: "/rss",
          },
          {
            name: "GitHub",
            url: "/github",
          },
          {
            name: "Twitter",
            url: "/twitter",
          },
        ]}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should not render anything if links is []", () => {
    const { container } = render(<ExternalLinks links={[]} />)
    expect(container.firstChild).toBeNull()
  })

  test("should render links.url as lnik", () => {
    const { getByRole } = render(
      <ExternalLinks
        links={[
          {
            name: "",
            url: "/profile",
          },
        ]}
      />
    )
    expect(getByRole("link")).toHaveAttribute("href", "/profile")
  })

  test("should render links.name", () => {
    const { getByLabelText } = render(
      <ExternalLinks
        links={[
          {
            name: "Profile",
            url: "/",
          },
        ]}
      />
    )
    expect(getByLabelText("Move a page. (Profile)")).toBeInTheDocument()
  })

  test("should render FaLink", () => {
    render(
      <ExternalLinks
        links={[
          {
            name: "",
            url: "/",
          },
        ]}
      />
    )
    expect(mockFaLink).toHaveBeenCalled()
    expect(mockFaRss).not.toHaveBeenCalled()
    expect(mockFaGithub).not.toHaveBeenCalled()
    expect(mockFaTwitter).not.toHaveBeenCalled()
  })

  test("should render FaRss", () => {
    render(
      <ExternalLinks
        links={[
          {
            name: "RSS",
            url: "/",
          },
        ]}
      />
    )
    expect(mockFaLink).not.toHaveBeenCalled()
    expect(mockFaRss).toHaveBeenCalled()
    expect(mockFaGithub).not.toHaveBeenCalled()
    expect(mockFaTwitter).not.toHaveBeenCalled()
  })

  test("should render FaGithub", () => {
    render(
      <ExternalLinks
        links={[
          {
            name: "GitHub",
            url: "/",
          },
        ]}
      />
    )
    expect(mockFaLink).not.toHaveBeenCalled()
    expect(mockFaRss).not.toHaveBeenCalled()
    expect(mockFaGithub).toHaveBeenCalled()
    expect(mockFaTwitter).not.toHaveBeenCalled()
  })

  test("should render FaTwitter", () => {
    render(
      <ExternalLinks
        links={[
          {
            name: "Twitter",
            url: "/",
          },
        ]}
      />
    )
    expect(mockFaLink).not.toHaveBeenCalled()
    expect(mockFaRss).not.toHaveBeenCalled()
    expect(mockFaGithub).not.toHaveBeenCalled()
    expect(mockFaTwitter).toHaveBeenCalled()
  })
})
