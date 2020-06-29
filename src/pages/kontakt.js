// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql } from "gatsby"

// IMPORT COMPONENT
import Section from "../components/organisms/section/section"

// CREATE NEW COMPONENT

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query Contact {
          allDatoCmsService {
            nodes {
              id
              city
              slug
              title
              excerpt
            }
          }
        }
      `}
      render={data => {
        return <></>
      }}
    />
  )
}

export default IndexPage
