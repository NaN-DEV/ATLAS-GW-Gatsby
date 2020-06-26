exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    query allService {
      allDatoCmsService {
        nodes {
          slug
          city
          title
          excerpt
          mainImage {
            alt
            title
            url
          }
        }
      }
      allDatoCmsEvent {
        nodes {
          id
          slug
          title
          excerpt
          mainImage {
            alt
            title
            url
          }
        }
      }
      allDatoCmsTutorial {
        nodes {
          id
          slug
          title
          excerpt
          mainImage {
            alt
            title
            url
          }
        }
      }
    }
  `)
  queryResults.data.allDatoCmsService.nodes.forEach((content, index) => {
    createPage({
      path: `/uslugi/${content.city}/${content.slug}`,
      component: require.resolve(`./src/templates/service.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsEvent.nodes.forEach((content, index) => {
    createPage({
      path: `/wydarzenia/${content.slug}`,
      component: require.resolve(`./src/templates/event.js`),
      context: { content, index },
    })
  })
  queryResults.data.allDatoCmsTutorial.nodes.forEach((content, index) => {
    createPage({
      path: `/poradniki/${content.slug}`,
      component: require.resolve(`./src/templates/tutorial.js`),
      context: { content, index },
    })
  })
}
