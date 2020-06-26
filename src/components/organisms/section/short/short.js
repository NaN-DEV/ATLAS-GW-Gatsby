// IMPORT PLUGIN
import React from "react"
import Img from "gatsby-image"
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
  BoxExcerpt,
  Footer,
} from "./style/style"

// CREATE NEW COMPONENT

const SectionShortComponent = props => {
  const { content, event, service, tutorial } = props

  return (
    <>
      {content.length ? (
        <>
          {content.map((item, index) => {
            return (
              <Section key={item.id + "_" + index} theme={theme}>
                <Row>
                  <Header theme={theme}>
                    <h1>{item.title}</h1>
                  </Header>
                  <Content theme={theme}>
                    {item.meta && (
                      <BoxData theme={theme}>
                        <strong>Dodano : </strong>
                        {item.meta.publishedAt}
                      </BoxData>
                    )}
                    {item.mainImage && (
                      <BoxImg theme={theme}>
                        <Img
                          fluid={item.mainImage.fixed}
                          title={item.mainImage.title}
                          alt={item.mainImage.alt}
                        />
                      </BoxImg>
                    )}
                    <BoxExcerpt service={service ? true : false} theme={theme}>
                      {item.excerpt}
                    </BoxExcerpt>
                  </Content>
                  <Footer theme={theme}>
                    {event && (
                      <Link to={`/wydarzenia/${item.slug}`}>Więcej</Link>
                    )}
                    {tutorial && (
                      <Link to={`/poradniki/${item.slug}`}>Więcej</Link>
                    )}
                    {service && (
                      <Link to={`/uslugi/${item.city}/${item.slug}`}>
                        Więcej
                      </Link>
                    )}
                  </Footer>
                </Row>
              </Section>
            )
          })}
        </>
      ) : (
        <>
          <Section theme={theme}>
            <Row>
              <Header theme={theme}>
                <h1>Hej !</h1>
              </Header>
              <Content theme={theme}>
                Sory... ale w tym dziale nie dodaliśmy jeszcze artykułów ,
                właśnie nad tym pracujemy :) Przepraszamy i dzięki za
                wyrozumiałość ! :)
              </Content>
              <Footer theme={theme}></Footer>
            </Row>
          </Section>
        </>
      )}
    </>
  )
}

export default SectionShortComponent
