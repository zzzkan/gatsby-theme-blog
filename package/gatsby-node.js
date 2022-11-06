const readingTime = require("reading-time")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: "slugify",
    extend() {
      return {
        resolve(source, args, context, info) {
          const field = source[info.fieldName]
          if (!field) return undefined
          const slug = field
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "")
          return `/${""}/${slug}`.replace(/\/\/+/g, "/")
        },
      }
    },
  })

  createFieldExtension({
    name: "parentPassThrough",
    extend() {
      return {
        async resolve(source, args, context, info) {
          const fieldName = info.fieldName
          const parent = context.nodeModel.getNodeById({
            id: source.parent,
          })
          const type = info.schema.getType(parent.internal.type)
          const resolver = type.getFields()[fieldName].resolve
          const result = await resolver(parent, args, context, {
            fieldName,
          })
          return result
        },
      }
    },
  })

  createTypes(`
    type Post implements Node {
      id: ID!
      filePath: String!
      slug: String! @slugify
      title: String!
      publishedDate: Date! @dateformat
      updatedDate: Date @dateformat
      featuredImage: File @fileByRelativePath
      featuredImageAlt: String
      tags: [String!]
      timeToReadMinutes: Float
      wordCount: Int
      description: String
      excerpt(pruneLength: Int = 140): String! @parentPassThrough
      body: String! @parentPassThrough
    }
  `)
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createParentChildLink } = actions
  const fileNode = getNode(node.parent)

  if (
    node.internal.type === "Mdx" &&
    fileNode.sourceInstanceName === "content/posts"
  ) {
    const readingTimeResult = readingTime(node.body)
    const fieldData = {
      filePath: fileNode.absolutePath,
      slug: node.frontmatter.slug,
      title: node.frontmatter.title,
      publishedDate: node.frontmatter.publishedDate,
      updatedDate: node.frontmatter.updatedDate,
      featuredImage: node.frontmatter.featuredImage,
      featuredImageAlt: node.frontmatter.featuredImageAlt,
      tags: node.frontmatter.tags,
      timeToReadMinutes: readingTimeResult.minutes,
      wordCount: readingTimeResult.words,
      description: node.frontmatter.description,
    }

    const postId = createNodeId(`${node.id} >>> Post`)

    createNode({
      ...fieldData,
      // Required fields
      id: postId,
      parent: node.id,
      children: [],
      internal: {
        type: "Post",
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: "Node created by @zzzkan/gatsby-theme-blog",
      },
    })

    createParentChildLink({ parent: node, child: getNode(postId) })
  }
}

const postTemplate = require.resolve("./src/templates/PostTemplate.tsx")
const postsTemplate = require.resolve("./src/templates/PostsTemplate.tsx")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  createPage({
    path: "/",
    component: postsTemplate,
  })

  const result = await graphql(`
    query {
      allPost(sort: { fields: publishedDate, order: DESC }) {
        nodes {
          id
          filePath
          slug
        }
      }
    }
  `)

  if (result.errors) reporter.panicOnBuild(result.errors)

  const posts = result.data.allPost.nodes
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? undefined : posts[index + 1]
    const next = index === 0 ? undefined : posts[index - 1]
    createPage({
      path: post.slug,
      component: `${postTemplate}?__contentFilePath=${post.filePath}`,
      context: {
        id: post.id,
        previousId: previous ? previous.id : undefined,
        nextId: next ? next.id : undefined,
      },
    })
  })
}
