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
      allStrapiDogs {
        edges {
          node {
            strapiId
          }
        }
      }
    }
    
  `
  ).then(result => {
    result.data.allStrapiDogs.edges.forEach(({ node: { strapiId: id } }) => {
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

// https://github.com/strapi/gatsby-source-strapi/issues/98#issuecomment-582492769
exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    StrapiDogsCarousel: {
      imageFile: {
        type: "File",
        resolve(source) {
          return createRemoteFileNode({
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
