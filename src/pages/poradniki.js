// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql } from "gatsby"

// IMPORT COMPONENT
import Section from "../components/organisms/section/section"

// CREATE NEW COMPONENT

const PoradnikiPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query ListaPoradnikow {
          allDatoCmsTutorial {
            nodes {
              title
              slug
              id
              excerpt
              meta {
                publishedAt(formatString: "DD.MM.YYYY")
              }
              mainImage {
                alt
                title
                fixed {
                  ...GatsbyDatoCmsFixed
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <Section short tutorial content={data.allDatoCmsTutorial.nodes} />
          </>
        )
      }}
    />
  )
}

export default PoradnikiPage
