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
        query Home {
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
              title={`Tania Pomoc drogowa ATLAS Gorzów Wielkopolski auto pomoc 24h !`}
              description="LAWETA GORZÓW, POMOC DROGOWA GORZÓW, POMOC DROGOWA GORZÓW WIELKOPOLSKI."
              canonical={`https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/`}
              openGraph={{
                url: `https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/`,
                title: `Tania Pomoc drogowa ATLAS Gorzów Wielkopolski auto pomoc 24h !`,
                description: `LAWETA GORZÓW, POMOC DROGOWA GORZÓW, POMOC DROGOWA GORZÓW WIELKOPOLSKI.`,
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
            <Section short service content={data.allDatoCmsService.nodes} />
          </>
        )
      }}
    />
  )
}

export default IndexPage
