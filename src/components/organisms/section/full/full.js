// IMPORT PLUGIN
import React from "react"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react"
import { graphql, StaticQuery, Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/theme/settings"

// IMPORT COMPONENT
import Row from "../../../atoms/row/row"
import Icon from "../../../atoms/icon/icon"

// IMPORT STYLES
import {
  Section,
  Header,
  Content,
  BoxData,
  BoxImg,
  BoxDescription,
  FullDescription,
  Footer,
} from "./style/style"

// CREATE NEW COMPONENT

const SectionFullComponent = props => {
  const { index, event, service, tutorial } = props
  return (
    <StaticQuery
      query={graphql`
        query sectionFull {
          allDatoCmsService {
            nodes {
              id
              slug
              city
              title
              locale
              category {
                id
                nazwa
                slug
              }
              mainContentService {
                ... on DatoCmsDescriptionService {
                  id
                  description
                }
                ... on DatoCmsImageService {
                  id
                  image {
                    fixed {
                      ...GatsbyDatoCmsFixed
                    }
                  }
                }
              }
              mainImage {
                alt
                title
                fixed {
                  ...GatsbyDatoCmsFixed
                }
              }
              meta {
                publishedAt(formatString: "DD.MM.YYYY")
              }
            }
          }
          allDatoCmsEvent {
            nodes {
              id
              slug
              title
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
              mainContentEvent {
                ... on DatoCmsImageEvent {
                  id
                  image {
                    alt
                    title
                    fixed {
                      ...GatsbyDatoCmsFixed
                    }
                  }
                }
                ... on DatoCmsDescriptionEvent {
                  id
                  description
                }
              }
            }
          }
          allDatoCmsTutorial {
            nodes {
              id
              title
              slug
              descriptionStart
              mainImage {
                alt
                title
                fixed {
                  ...GatsbyDatoCmsFixed
                }
              }
              meta {
                publishedAt(formatString: "DD.MM.YYYY")
              }
              pktTutorials {
                title
                description
                id
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
        const contentService = data.allDatoCmsService.nodes[index]
        const contentEvent = data.allDatoCmsEvent.nodes[index]
        const contentTutorial = data.allDatoCmsTutorial.nodes[index]

        let disqusConfig = {
          shortname: process.env.GATSBY_DISQUS_NAME,
          config: { identifier: contentService.id },
        }

        return (
          <>
            <Section theme={theme}>
              <Row>
                <Header theme={theme}>
                  <h1>
                    {service && `${contentService.title}`}
                    {event && `${contentEvent.title}`}
                    {tutorial && `${contentTutorial.title}`}
                  </h1>
                </Header>

                <Content theme={theme}>
                  {/* START SERVICE */}
                  {service && (
                    <>
                      <BoxData theme={theme}>
                        <strong>Dodano : </strong>
                        {contentService.meta.publishedAt}
                      </BoxData>

                      <BoxImg theme={theme}>
                        <Img
                          fluid={contentService.mainImage.fixed}
                          title={contentService.mainImage.title}
                          alt={contentService.mainImage.alt}
                        />
                      </BoxImg>
                      {contentService.mainContentService.map(item => {
                        return (
                          <>
                            <BoxDescription
                              service={service ? true : false}
                              theme={theme}
                              top={item.image && true}
                              key={`${item.id}_box`}
                            >
                              {item.image && (
                                <Img
                                  fluid={item.image.fixed}
                                  title={item.image.title}
                                  alt={item.image.alt}
                                  key={`${item.id}_img`}
                                />
                              )}
                              {item.description && (
                                <FullDescription
                                  key={`${item.id}_txt`}
                                  dangerouslySetInnerHTML={{
                                    __html: item.description,
                                  }}
                                />
                              )}
                            </BoxDescription>
                          </>
                        )
                      })}
                    </>
                  )}
                  {/* STOP SERVICE */}
                  {/* START EVENTS */}
                  {event && (
                    <>
                      <BoxData theme={theme}>
                        <strong>Dodano : </strong>
                        {contentEvent.meta.publishedAt}
                      </BoxData>

                      <BoxImg theme={theme}>
                        <Img
                          fluid={contentEvent.mainImage.fixed}
                          title={contentEvent.mainImage.title}
                          alt={contentEvent.mainImage.alt}
                          key={`main-image-event`}
                        />
                      </BoxImg>
                      {contentEvent.mainContentEvent.map(item => {
                        return (
                          <>
                            <BoxDescription
                              service={service ? true : false}
                              theme={theme}
                              top={item.image && true}
                              key={`${item.id}_box`}
                            >
                              {item.image && (
                                <Img
                                  fluid={item.image.fixed}
                                  title={item.image.title}
                                  alt={item.image.alt}
                                  key={`${item.id}_img`}
                                />
                              )}
                              {item.description && (
                                <FullDescription
                                  key={`${item.id}_txt`}
                                  dangerouslySetInnerHTML={{
                                    __html: item.description,
                                  }}
                                />
                              )}
                            </BoxDescription>
                          </>
                        )
                      })}
                    </>
                  )}
                  {/* START EVENTS */}
                  {/* START TUTORIAL */}
                  {tutorial && (
                    <>
                      <BoxData theme={theme}>
                        <strong>Dodano : </strong>
                        {contentTutorial.meta.publishedAt}
                      </BoxData>

                      <BoxImg theme={theme}>
                        <Img
                          fluid={contentTutorial.mainImage.fixed}
                          title={contentTutorial.mainImage.title}
                          alt={contentTutorial.mainImage.alt}
                          key={`main-image-event`}
                        />
                      </BoxImg>

                      <BoxDescription
                        service={service ? true : false}
                        theme={theme}
                        top={false}
                        key={`${contentTutorial.id}_box_txt`}
                      >
                        <FullDescription
                          key={`${contentTutorial.id}_txt`}
                          dangerouslySetInnerHTML={{
                            __html: contentTutorial.descriptionStart,
                          }}
                        />
                      </BoxDescription>

                      {contentTutorial.pktTutorials.map((pkt, i) => {
                        return (
                          <>
                            <BoxDescription
                              service={service ? true : false}
                              theme={theme}
                              top={true}
                              key={`${pkt.id}_box`}
                            >
                              <h1>
                                {i + 1}.{pkt.title}
                              </h1>
                              {pkt.image && (
                                <Img
                                  fluid={pkt.image.fixed}
                                  title={pkt.image.title}
                                  alt={pkt.image.alt}
                                  key={`${pkt.id}_img`}
                                />
                              )}

                              {pkt.description && (
                                <FullDescription
                                  key={`${pkt.id}_txt`}
                                  dangerouslySetInnerHTML={{
                                    __html: pkt.description,
                                  }}
                                />
                              )}
                            </BoxDescription>
                          </>
                        )
                      })}
                    </>
                  )}
                  {/* START TUTORIAL */}
                </Content>
                <Footer theme={theme}>
                  <DiscussionEmbed
                    style={{ width: "100%" }}
                    {...disqusConfig}
                  />
                </Footer>
              </Row>
            </Section>
          </>
        )
      }}
    />
  )
}

export default SectionFullComponent
