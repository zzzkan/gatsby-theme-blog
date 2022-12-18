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
      lang: String!
      basePath: String!
      contentPath: String!
      postImageMaxWidth: Int!
      featuredImageAspectRatio: Float!
      dateFormatString: String!
      postsLimit: Int!
      relatedPostsLimit: Int!
      shikiLightTheme: String!
      shikiDarkTheme: String!
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

exports.createResolvers = ({ createResolvers }, themeOptions) => {
  const { relatedPostsLimit } = defaultThemeOptions(themeOptions)
  const resolvers = {
    Post: {
      relatedPosts: {
        type: ["Post"],
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
                  in: source.tags,
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

  const allPostsPageNumber = Math.ceil(allPosts.length / postsLimit)
  for (let i = 0; i < allPostsPageNumber; i++) {
    createPage({
      path: i === 0 ? basePath : `${basePath}/${i + 1}`.replace(/\/\/+/g, "/"),
      component: allPostsTemplate,
      context: {
        totalPage: allPostsPageNumber,
        currentPage: i + 1,
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
      const tag = posts.fieldValue
      const count = posts.totalCount
      const tagPostsPath = `${basePath}/tags/${tag}`.replace(/\/\/+/g, "/")
      const tagPostsPageNumber = Math.ceil(count / postsLimit)
      for (let i = 0; i < tagPostsPageNumber; i++) {
        createPage({
          path:
            i === 0
              ? tagPostsPath
              : `${tagPostsPath}/${i + 1}`.replace(/\/\/+/g, "/"),
          component: tagPostsTemplate,
          context: {
            totalPage: tagPostsPageNumber,
            currentPage: i + 1,
            limit: postsLimit,
            skip: i * postsLimit,
            tag,
            count,
            featuredImageAspectRatio,
            dateFormatString,
          },
        })
      }
    })
  }
}
