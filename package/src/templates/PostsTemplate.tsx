import React from "react"
import { graphql, PageProps } from "gatsby"

const PostsTemplate: React.FC<PageProps<Queries.PostsTemplateQuery>> = ({
  data,
}) => {
  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}

export default PostsTemplate

export const query = graphql`
  query PostsTemplate {
    allPost(sort: { fields: publishedDate, order: DESC }) {
      nodes {
        id
        slug
        title
        publishedDate(formatString: "YYYY/MM/DD")
        updatedDate(formatString: "YYYY/MM/DD")
      }
    }
  }
`
