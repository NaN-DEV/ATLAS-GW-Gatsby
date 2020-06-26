import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Section from "../components/organisms/section/section"

const Events = props => {
  const index = props.pageContext.index
  const content = props.pageContext.content
  return (
    <>
      <GatsbySeo
        title={`${content.title} - ATLAS Pomoc drogowa`}
        description={content.excerpt}
        canonical={`https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/${content.slug}`}
        openGraph={{
          url: `https://www.pomoc-drogowa-gorzow.com.pl/wydarzenia/${content.slug}`,
          title: content.title,
          description: content.excerpt,
          images: [
            {
              url: content.mainImage.url,
              alt: content.mainImage.alt,
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
      <Section full event index={props.pageContext.index} />
    </>
  )
}

export default Events
