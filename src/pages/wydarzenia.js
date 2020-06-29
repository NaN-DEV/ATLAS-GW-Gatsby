// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql } from "gatsby"

// IMPORT COMPONENT
import Section from "../components/organisms/section/section"

// CREATE NEW COMPONENT

const WydarzeniaPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query ListaWydarzen {
          allDatoCmsEvent {
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
        const content = data.allDatoCmsEvent.nodes
        return (
          <>
            <Section short event content={data.allDatoCmsEvent.nodes} />
          </>
        )
      }}
    />
  )
}

export default WydarzeniaPage
