import React from "react"
import { graphql, PageProps } from "gatsby"

const PostTemplate: React.FC<PageProps<Queries.PostTemplateQuery>> = ({
  data,
  pageContext,
  children,
}) => {
  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      {children}
    </main>
  )
}

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!, $previousId: String, $nextId: String) {
    mdx(id: { eq: $id }) {
      id
    }
    previous: post(id: { eq: $previousId }) {
      id
      slug
      title
    }
    next: post(id: { eq: $nextId }) {
      id
      slug
      title
    }
  }
`
