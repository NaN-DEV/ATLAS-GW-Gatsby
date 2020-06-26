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
        query About {
          allDatoCmsAbout {
            nodes {
              id
              descriptionCompany
              historiaCompany {
                id
                title
                descriptionEvent
                image {
                  alt
                  title
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <GatsbySeo
              title={`O firmie - ATLAS Pomoc drogowa`}
              description={`Ciekaw jesteś naszej histori ? Sprawdź ją...`}
              canonical={`https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/`}
              openGraph={{
                url: `https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/`,
                title: `O firmie - ATLAS Pomoc drogowa`,
                description: `Ciekaw jesteś naszej histori ? Sprawdź ją...`,
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
            <Section about content={data.allDatoCmsAbout.nodes[0]} />
          </>
        )
      }}
    />
  )
}

export default IndexPage
