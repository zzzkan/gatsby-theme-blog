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
            label: "Profile Label",
          },
          {
            name: "RSS",
            url: "/rss",
            label: "RSS Label",
          },
          {
            name: "GitHub",
            url: "/github",
            label: "GitHub Label",
          },
          {
            name: "Twitter",
            url: "/twitter",
            label: "Twitter Label",
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

  test("should render links.name as label", () => {
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
    expect(getByLabelText("Transition to Profile")).toBeInTheDocument()
  })

  test("should render links.label as label", () => {
    const { queryByLabelText } = render(
      <ExternalLinks
        links={[
          {
            name: "Profile",
            url: "/",
            label: "Profile Label",
          },
        ]}
      />
    )
    expect(queryByLabelText("Transition to Profile")).toBeNull()
    expect(queryByLabelText("Transition to Profile Label")).toBeInTheDocument()
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
