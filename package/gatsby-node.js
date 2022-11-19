const readingTime = require("reading-time")
const defaultThemeOptions = require("./utils/defaultThemeOptions")

exports.createSchemaCustomization = ({ actions }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions
  const { basePath } = defaultThemeOptions(themeOptions)

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
          return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
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

    type themeOption implements Node {
      basePath: String
      contentPath: String
      postImageMaxWidth: Int
      featuredImageAspectRatio: Float
      dateFormatString: String
      links: [Link]
    }

    type Link {
      name: String!
      url: String!
      label: String
    }

  `)
}

exports.sourceNodes = ({ actions, createContentDigest }, themeOptions) => {
  const { createNode } = actions
  const options = defaultThemeOptions(themeOptions)
  const themeConfig = { ...options }

  createNode({
    ...themeConfig,
    id: "@zzzkan/gatsby-theme-blog",
    parent: null,
    children: [],
    internal: {
      type: "themeOption",
      contentDigest: createContentDigest(themeConfig),
      content: JSON.stringify(themeConfig),
      description: "Options for @zzzkan/gatsby-theme-blog",
    },
  })
}

exports.onCreateNode = (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions
  const fileNode = getNode(node.parent)
  const { contentPath } = defaultThemeOptions(themeOptions)

  if (
    node.internal.type === "Mdx" &&
    fileNode.sourceInstanceName === contentPath
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
const allPostsTemplate = require.resolve("./src/templates/AllPostsTemplate.tsx")
const tagPostsTemplate = require.resolve("./src/templates/TagPostsTemplate.tsx")

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const { basePath, featuredImageAspectRatio, dateFormatString } =
    defaultThemeOptions(themeOptions)

  createPage({
    path: basePath,
    component: allPostsTemplate,
    context: {
      featuredImageAspectRatio,
      dateFormatString,
    },
  })

  const result = await graphql(`
    query {
      allPosts: allPost(sort: { fields: publishedDate, order: DESC }) {
        nodes {
          id
          filePath
          slug
        }
      }
      tagPosts: allPost {
        group(field: tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) reporter.panicOnBuild(result.errors)

  const allPosts = result.data.allPosts.nodes
  allPosts.forEach((post, index) => {
    const previous =
      index === allPosts.length - 1 ? undefined : allPosts[index + 1]
    const next = index === 0 ? undefined : allPosts[index - 1]
    createPage({
      path: post.slug,
      component: `${postTemplate}?__contentFilePath=${post.filePath}`,
      context: {
        id: post.id,
        previousId: previous ? previous.id : undefined,
        nextId: next ? next.id : undefined,
        featuredImageAspectRatio,
        dateFormatString,
      },
    })
  })

  const tagPosts = result.data.tagPosts.group
  if (tagPosts.length > 0) {
    tagPosts.forEach((tag) => {
      createPage({
        path: `${basePath}/tags/${tag.fieldValue}`.replace(/\/\/+/g, "/"),
        component: tagPostsTemplate,
        context: {
          tag: tag.fieldValue,
          count: tag.totalCount,
          featuredImageAspectRatio,
          dateFormatString,
        },
      })
    })
  }
}
