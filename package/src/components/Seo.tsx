import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

type Props = {
  readonly path?: string
  readonly title?: string
  readonly description?: string
  readonly publishedDate?: string
  readonly updatedDate?: string
  readonly image?: string
  readonly noindex?: boolean
  readonly children?: React.ReactNode
}

export const Seo: React.FC<Props> = (props) => {
  const {
    title: siteTitle,
    siteUrl,
    description,
    author,
    imageUrl,
  } = useSiteMetadata()

  const isBlogPosting = props.publishedDate != null
  const pageTitle =
    props.title != null ? `${props.title} - ${siteTitle}` : siteTitle
  const pageUrl = new URL(props?.path ?? "", siteUrl).href
  const pageDescription = (props?.description ?? description).replace(
    /(\r?\n)+/g,
    " "
  )
  const pageImageUrl =
    props?.image != null ? new URL(props.image, siteUrl).href : imageUrl

  return (
    <>
      <title>{pageTitle}</title>
      <meta name={"description"} content={pageDescription} />
      <meta property={"og:type"} content={isBlogPosting ? "article" : "blog"} />
      <meta property={"og:title"} content={pageTitle} />
      <meta property={"og:url"} content={pageUrl} />
      <meta property={"og:description"} content={pageDescription} />
      <meta property={"og:image"} content={pageImageUrl} />
      <meta property={"og:site_name"} content={siteTitle} />
      <meta name={"twitter:card"} content={"summary_large_image"} />
      <meta name={"twitter:title"} content={pageTitle} />
      <meta name={"twitter:url"} content={pageUrl} />
      <meta name={"twitter:description"} content={pageDescription} />
      <meta name={"twitter:image"} content={pageImageUrl} />
      <meta name={"twitter:creator"} content={author} />
      {props?.noindex === true && (
        <meta name={"robots"} content={"noindex, nofollow"} />
      )}
      <link rel="canonical" href={pageUrl} />
      {isBlogPosting && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: pageTitle,
            image: pageImageUrl,
            datePublished: props.publishedDate,
            dateModified: props.updatedDate ?? props.publishedDate,
            author: {
              "@type": "Person",
              name: author,
              url: siteUrl,
            },
          })}
        </script>
      )}
      {props.children}
    </>
  )
}
