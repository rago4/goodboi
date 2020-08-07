const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getDogs = makeRequest(
    graphql,
    `
    {
      strapi {
        dogs {
          id
        }
      }
    }
    
  `
  ).then(result => {
    result.data.strapi.dogs.forEach(({ id }) => {
      createPage({
        path: `adoption/${id}`,
        component: path.resolve("src/templates/DogTemplate/index.tsx"),
        context: {
          id,
        },
      })
    })
  })

  return getDogs
}

// https://dev.to/nevernull/gatsby-with-wpgraphql-acf-and-gatbsy-image-72m
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    STRAPI_UploadFile: {
      imageFile: {
        type: "File",
        async resolve(source) {
          return await createRemoteFileNode({
            url: `http://localhost:1337${source.url}`,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
