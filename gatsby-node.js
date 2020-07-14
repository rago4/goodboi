const path = require("path")

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
