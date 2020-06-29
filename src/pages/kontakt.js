// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

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
        return (
          <>
            <GatsbySeo
              title={`Kontakt - ATLAS Pomoc drogowa`}
              description={`Napisz do nas nie gryziemy...a zawsze chętnie pomorzemy !`}
              canonical={`https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/`}
              openGraph={{
                url: `https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/`,
                title: `Kontakt - ATLAS Pomoc drogowa`,
                description: `Napisz do nas nie gryziemy...a zawsze chętnie pomorzemy !`,
                images: [
                  {
                    url: `https://www.datocms-assets.com/27299/1588588205-6592184023093889224842584281127317939421184o.jpg`,
                    alt: `atlas pomoc drogowa`,
                  },
                ],
                site_name: "ATLAS POMOC DROGOWA",
              }}
              twitter={{
                handle: "@handle",
                site: "@site",
                cardType: "summary_large_image",
              }}
            />
          </>
        )
      }}
    />
  )
}

export default IndexPage
