import React from "react"
import { render } from "@testing-library/react"
import { ExternalLinks } from "../ExternalLinks"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { FaRss } from "@react-icons/all-files/fa/FaRss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { useThemeOption } from "../../hooks/useThemeOption"

describe("ExternalLinks component", () => {
  vi.mock("@react-icons/all-files/fa/FaLink")
  vi.mock("@react-icons/all-files/fa/FaRss")
  vi.mock("@react-icons/all-files/fa/FaGithub")
  vi.mock("@react-icons/all-files/fa/FaTwitter")
  vi.mock("../../hooks/useThemeOption")

  const mockFaLink = FaLink as jest.Mock
  const mockFaRss = FaRss as jest.Mock
  const mockFaGithub = FaGithub as jest.Mock
  const mockFaTwitter = FaTwitter as jest.Mock
  const mockUseThemeOption = useThemeOption as jest.Mock

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("snapshot", () => {
    ;(useThemeOption as jest.Mock).mockImplementationOnce(() => {
      return {
        links: [
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
        ],
      }
    })
    const { asFragment } = render(<ExternalLinks />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("should not render anything if links is null", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { links: null }
    })
    const { container } = render(<ExternalLinks />)
    expect(container.firstChild).toBeNull()
  })

  test("should not render anything if links is []", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return { links: [] }
    })
    const { container } = render(<ExternalLinks />)
    expect(container.firstChild).toBeNull()
  })

  test("should render links.url as lnik", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return {
        links: [
          {
            name: "",
            url: "/profile",
          },
        ],
      }
    })
    const { getByRole } = render(<ExternalLinks />)
    expect(getByRole("link")).toHaveAttribute("href", "/profile")
  })

  test("should render links.name as label", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return {
        links: [
          {
            name: "Profile",
            url: "/",
          },
        ],
      }
    })
    const { getByLabelText } = render(<ExternalLinks />)
    expect(getByLabelText("Profile")).toBeInTheDocument()
  })

  test("should render links.label as label", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return {
        links: [
          {
            name: "Profile",
            url: "/",
            label: "Profile Label",
          },
        ],
      }
    })
    const { queryByLabelText } = render(<ExternalLinks />)
    expect(queryByLabelText("Profile")).toBeNull()
    expect(queryByLabelText("Profile Label")).toBeInTheDocument()
  })

  test("should render FaLink", () => {
    ;(useThemeOption as jest.Mock).mockImplementationOnce(() => {
      return {
        links: [
          {
            name: "",
            url: "/",
          },
        ],
      }
    })
    render(<ExternalLinks />)
    expect(mockFaLink).toHaveBeenCalled()
    expect(mockFaRss).not.toHaveBeenCalled()
    expect(mockFaGithub).not.toHaveBeenCalled()
    expect(mockFaTwitter).not.toHaveBeenCalled()
  })

  test("should render FaRss", () => {
    ;(useThemeOption as jest.Mock).mockImplementationOnce(() => {
      return {
        links: [
          {
            name: "RSS",
            url: "/",
          },
        ],
      }
    })
    render(<ExternalLinks />)
    expect(mockFaLink).not.toHaveBeenCalled()
    expect(mockFaRss).toHaveBeenCalled()
    expect(mockFaGithub).not.toHaveBeenCalled()
    expect(mockFaTwitter).not.toHaveBeenCalled()
  })

  test("should render FaGithub", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return {
        links: [
          {
            name: "GitHub",
            url: "/",
          },
        ],
      }
    })
    render(<ExternalLinks />)
    expect(mockFaLink).not.toHaveBeenCalled()
    expect(mockFaRss).not.toHaveBeenCalled()
    expect(mockFaGithub).toHaveBeenCalled()
    expect(mockFaTwitter).not.toHaveBeenCalled()
  })

  test("should render FaTwitter", () => {
    mockUseThemeOption.mockImplementationOnce(() => {
      return {
        links: [
          {
            name: "Twitter",
            url: "/",
          },
        ],
      }
    })
    render(<ExternalLinks />)
    expect(mockFaLink).not.toHaveBeenCalled()
    expect(mockFaRss).not.toHaveBeenCalled()
    expect(mockFaGithub).not.toHaveBeenCalled()
    expect(mockFaTwitter).toHaveBeenCalled()
  })
})
