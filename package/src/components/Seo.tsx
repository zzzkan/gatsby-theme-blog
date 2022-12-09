import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export type SeoProps = {
  path?: string
  title?: string
  description?: string
  publishedDate?: string
  updatedDate?: string
  image?: string
  children?: React.ReactNode
}

const Seo: React.FC<SeoProps> = (props) => {
  const {
    title: siteTitle,
    siteUrl,
    description,
    author,
    image: defaultImage,
  } = useSiteMetadata()

  const isBlogPosting = props.publishedDate != null
  const pageTitle =
    props.title != null ? `${props.title} - ${siteTitle}` : siteTitle
  const pageUrl = `${siteUrl}/${props?.path ?? ""}`.replace(/\/\/+/g, "/")
  const pageDescription = props?.description ?? description
  const pageImageUrl = `${siteUrl}/${props?.image ?? defaultImage}`.replace(
    /\/\/+/g,
    "/"
  )
  return (
    <>
      <title>{pageTitle}</title>
      <meta name={"description"} content={pageDescription} />
      <meta name={"image"} content={pageImageUrl} />
      <meta property={"og:title"} content={pageTitle} />
      <meta property={"og:site_name"} content={siteTitle} />
      <meta property={"og:url"} content={pageUrl} />
      <meta property={"og:description"} content={pageDescription} />
      <meta property={"og:image"} content={pageImageUrl} />
      <meta property={"og:image:alt"} content={pageDescription} />
      <meta property={"og:type"} content={isBlogPosting ? "article" : "blog"} />
      <meta name={"twitter:card"} content={"summary_large_image"} />
      <meta name={"twitter:title"} content={pageTitle} />
      <meta name={"twitter:url"} content={pageUrl} />
      <meta name={"twitter:description"} content={pageDescription} />
      <meta name={"twitter:image"} content={pageImageUrl} />
      <meta name={"twitter:image:alt"} content={pageDescription} />
      <meta name={"twitter:creator"} content={author} />
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

export default Seo
