// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

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
            <GatsbySeo
              title={`Poradniki - ATLAS Pomoc drogowa`}
              description={`Wybierasz się w podróz ? Spokojnie dzięki naszym poradnikom nie zgoniesz ! :)`}
              canonical={`https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/`}
              openGraph={{
                url: `https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/`,
                title: `Poradniki - ATLAS Pomoc drogowa`,
                description: `Wybierasz się w podróz ? Spokojnie dzięki naszym poradnikom nie zgoniesz ! :)`,
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
            <Section short tutorial content={data.allDatoCmsTutorial.nodes} />
          </>
        )
      }}
    />
  )
}

export default PoradnikiPage
