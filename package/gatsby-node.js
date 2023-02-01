const readingTime = require("reading-time")
const { createFilePath } = require(`gatsby-source-filesystem`)
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
            .replace(/[^a-z0-9/]+/g, "-")
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
      tags: [Tag!]
      timeToReadMinutes: Float
      wordCount: Int
      description: String
      noindex: Boolean
      excerpt(pruneLength: Int = 140): String! @parentPassThrough
      body: String! @parentPassThrough
    }

    type Tag {
      slug: String! @slugify
      name: String!
    }

    type themeOption implements Node {
      lang: String!
      basePath: String!
      contentPath: String!
      postImageMaxWidth: Int!
      featuredImageAspectRatio: Float!
      dateFormatString: String!
      postsLimit: Int!
      relatedPostsLimit: Int!
      shikiTheme: String!
      links: [Link]!
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
  const draft = node.frontmatter?.draft ?? false
  if (
    node.internal.type === "Mdx" &&
    fileNode.sourceInstanceName === contentPath &&
    (process.env.NODE_ENV !== "production" || draft === false)
  ) {
    const readingTimeResult = readingTime(node.body)
    const fieldData = {
      filePath: fileNode.absolutePath,
      slug: node.frontmatter.slug ?? createFilePath({ node, getNode }),
      title: node.frontmatter.title,
      publishedDate: node.frontmatter.publishedDate,
      updatedDate: node.frontmatter.updatedDate,
      featuredImage: node.frontmatter.featuredImage,
      featuredImageAlt: node.frontmatter.featuredImageAlt,
      tags: node.frontmatter.tags?.map((tag) => ({
        slug: `/tags/${tag}`,
        name: tag,
      })),
      timeToReadMinutes: readingTimeResult.minutes,
      wordCount: readingTimeResult.words,
      description: node.frontmatter.description,
      noindex: node.frontmatter.noindex,
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

exports.createResolvers = ({ createResolvers }, themeOptions) => {
  const { relatedPostsLimit } = defaultThemeOptions(themeOptions)
  const resolvers = {
    Post: {
      relatedPosts: {
        type: ["Post!"],
        resolve: async (source, args, context, info) => {
          if (source.tags == null) return null
          const { entries } = await context.nodeModel.findAll({
            type: "Post",
            query: {
              sort: { fields: ["publishedDate"], order: ["desc"] },
              filter: {
                id: {
                  ne: source.id,
                },
                tags: {
                  elemMatch: {
                    name: { in: source.tags.map((tag) => tag.name) },
                  },
                },
              },
              limit: relatedPostsLimit,
            },
          })
          return entries
        },
      },
    },
  }

  createResolvers(resolvers)
}

const postTemplate = require.resolve("./src/templates/PostTemplate.tsx")
const allPostsTemplate = require.resolve("./src/templates/AllPostsTemplate.tsx")
const tagPostsTemplate = require.resolve("./src/templates/TagPostsTemplate.tsx")

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const { basePath, featuredImageAspectRatio, dateFormatString, postsLimit } =
    defaultThemeOptions(themeOptions)

  const result = await graphql(`
    query {
      allPosts: allPost(sort: { publishedDate: DESC }) {
        nodes {
          id
          filePath
          slug
        }
      }
      tagPosts: allPost {
        group(field: { tags: { name: SELECT } }) {
          fieldValue
          totalCount
          nodes {
            tags {
              slug
              name
            }
          }
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

  const allPostsPageNumber = Math.ceil(allPosts.length / postsLimit)
  for (let i = 0; i < allPostsPageNumber; i++) {
    createPage({
      path: i === 0 ? basePath : `${basePath}/${i + 1}`.replace(/\/\/+/g, "/"),
      component: allPostsTemplate,
      context: {
        currentPage: i + 1,
        totalPage: allPostsPageNumber,
        limit: postsLimit,
        skip: i * postsLimit,
        featuredImageAspectRatio,
        dateFormatString,
      },
    })
  }

  const tagPostsGroup = result.data.tagPosts.group
  if (tagPostsGroup.length > 0) {
    tagPostsGroup.forEach((posts) => {
      const tag = posts.nodes[0].tags.find((t) => t.name === posts.fieldValue)
      const count = posts.totalCount
      const tagPostsPageNumber = Math.ceil(count / postsLimit)
      for (let i = 0; i < tagPostsPageNumber; i++) {
        createPage({
          path:
            i === 0 ? tag.slug : `${tag.slug}/${i + 1}`.replace(/\/\/+/g, "/"),
          component: tagPostsTemplate,
          context: {
            currentPage: i + 1,
            totalPage: tagPostsPageNumber,
            limit: postsLimit,
            skip: i * postsLimit,
            tagName: tag.name,
            tagCount: count,
            featuredImageAspectRatio,
            dateFormatString,
          },
        })
      }
    })
  }
}
