import React from "react"
import { render } from "@testing-library/react"
import { Seo } from "../Seo"

describe("Seo component", () => {
  vi.mock("../../hooks/useSiteMetadata", () => {
    return {
      useSiteMetadata: vi.fn().mockImplementation(() => {
        return {
          title: "siteTitle",
          siteUrl: "http://localhost:9000/",
          description: "siteDescription",
          author: "siteAuthor",
          authorUrl: "http://localhost:9001/",
          imageUrl: "http://localhost:9000/site-image.png",
        }
      }),
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
      <Seo
        path={"page-path"}
        title={"pageTitle"}
        description={"pageDescription"}
        publishedDate={"pagePublishedDate"}
        updatedDate={"pageUpdatedDate"}
        image={"page-image.png"}
      />,
      {
        container: document.head,
      }
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should put a default title", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(container.querySelector("title")?.textContent).toBe("siteTitle")
    expect(
      container?.querySelector("meta[property$=title]")?.getAttribute("content")
    ).toBe("siteTitle")
    expect(
      container?.querySelector("meta[name$=title]")?.getAttribute("content")
    ).toBe("siteTitle")
  })

  test("should put a custom title", () => {
    const { container } = render(<Seo title={"customTitle"} />, {
      container: document.head,
    })
    expect(container.querySelector("title")?.textContent).toBe(
      "customTitle - siteTitle"
    )
    expect(
      container?.querySelector("meta[property$=title]")?.getAttribute("content")
    ).toBe("customTitle - siteTitle")
    expect(
      container?.querySelector("meta[name$=title]")?.getAttribute("content")
    ).toBe("customTitle - siteTitle")
  })

  test("should put a default description", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(
      container
        .querySelector("meta[name='description']")
        ?.getAttribute("content")
    ).toBe("siteDescription")
    expect(
      container
        ?.querySelector("meta[property$=description]")
        ?.getAttribute("content")
    ).toBe("siteDescription")
    expect(
      container
        ?.querySelector("meta[name$=description]")
        ?.getAttribute("content")
    ).toBe("siteDescription")
  })

  test("should put a custom description", () => {
    const { container } = render(
      <Seo description={"custom\n\ndescription"} />,
      {
        container: document.head,
      }
    )
    expect(
      container
        .querySelector("meta[name='description']")
        ?.getAttribute("content")
    ).toBe("custom description")
    expect(
      container
        ?.querySelector("meta[property$=description]")
        ?.getAttribute("content")
    ).toBe("custom description")
    expect(
      container
        ?.querySelector("meta[name$=description]")
        ?.getAttribute("content")
    ).toBe("custom description")
  })

  test("should put a blog type", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(
      container?.querySelector("meta[property$=type]")?.getAttribute("content")
    ).toBe("blog")
  })

  test("should put a article type", () => {
    const { container } = render(<Seo publishedDate={"2023-01-01"} />, {
      container: document.head,
    })
    expect(
      container?.querySelector("meta[property$=type]")?.getAttribute("content")
    ).toBe("article")
  })

  test("should put a default url", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(
      container?.querySelector("meta[property$=url]")?.getAttribute("content")
    ).toBe("http://localhost:9000/")
    expect(
      container?.querySelector("meta[name$=url]")?.getAttribute("content")
    ).toBe("http://localhost:9000/")
    expect(
      container?.querySelector("link[rel=canonical]")?.getAttribute("href")
    ).toBe("http://localhost:9000/")
  })

  test("should put a custom url", () => {
    const { container } = render(<Seo path={"/custom/"} />, {
      container: document.head,
    })
    expect(
      container?.querySelector("meta[property$=url]")?.getAttribute("content")
    ).toBe("http://localhost:9000/custom/")
    expect(
      container?.querySelector("meta[name$=url]")?.getAttribute("content")
    ).toBe("http://localhost:9000/custom/")
    expect(
      container?.querySelector("link[rel=canonical]")?.getAttribute("href")
    ).toBe("http://localhost:9000/custom/")
  })

  test("should put a default image url", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(
      container?.querySelector("meta[property$=image]")?.getAttribute("content")
    ).toBe("http://localhost:9000/site-image.png")
    expect(
      container?.querySelector("meta[name$=image]")?.getAttribute("content")
    ).toBe("http://localhost:9000/site-image.png")
  })

  test("should put a custom image url", () => {
    const { container } = render(<Seo image={"/custom-site-image.png"} />, {
      container: document.head,
    })
    expect(
      container?.querySelector("meta[property$=image]")?.getAttribute("content")
    ).toBe("http://localhost:9000/custom-site-image.png")
    expect(
      container?.querySelector("meta[name$=image]")?.getAttribute("content")
    ).toBe("http://localhost:9000/custom-site-image.png")
  })

  test("should put a site name", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(
      container
        ?.querySelector("meta[property$=site_name]")
        ?.getAttribute("content")
    ).toBe("siteTitle")
  })

  test("should put a twitter card", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(
      container?.querySelector("meta[name$=card]")?.getAttribute("content")
    ).toBe("summary_large_image")
  })

  test("should put a creator", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(
      container?.querySelector("meta[name$=creator]")?.getAttribute("content")
    ).toBe("siteAuthor")
  })

  test("should not put a noindex tag", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(container?.querySelector("meta[name='robots']")).toBeNull()
  })

  test("should put a noindex tag", () => {
    const { container } = render(<Seo noindex={true} />, {
      container: document.head,
    })
    expect(
      container?.querySelector("meta[name='robots']")?.getAttribute("content")
    ).toBe("noindex, nofollow")
  })

  test("should not put a json-ld", () => {
    const { container } = render(<Seo />, {
      container: document.head,
    })
    expect(
      container?.querySelector("script[type=application/ld+json]")
    ).toBeNull()
  })

  test("should put a json-ld", () => {
    const { container } = render(
      <Seo
        title={"customTitle"}
        image={"/custom-site-image.png"}
        publishedDate={"2023-01-01"}
        updatedDate={"2023-01-02"}
      />,
      {
        container: document.head,
      }
    )
    const jsonld = JSON.parse(
      container?.querySelector("script[type=application/ld+json]")
        ?.textContent ?? ""
    )
    expect(jsonld["@type"]).toBe("BlogPosting")
    expect(jsonld.headline).toBe("customTitle - siteTitle")
    expect(jsonld.image).toBe("http://localhost:9000/custom-site-image.png")
    expect(jsonld.datePublished).toBe("2023-01-01")
    expect(jsonld.dateModified).toBe("2023-01-02")
    expect(jsonld.author.name).toBe("siteAuthor")
    expect(jsonld.author.url).toBe("http://localhost:9001/")
  })
})
