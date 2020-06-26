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
import List from "../../../molecules/list/list"

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

const SectionAboutComponent = props => {
  const { content } = props

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: "o-nas" },
  }

  return (
    <>
      <Section theme={theme}>
        <Row>
          <Header theme={theme}>
            <h1>O nas</h1>
          </Header>
          <Content theme={theme}>
            <BoxExcerpt
              theme={theme}
              dangerouslySetInnerHTML={{
                __html: content.descriptionCompany,
              }}
            />
            <List history items={content.historiaCompany} />
          </Content>
          <Footer theme={theme}>
            <DiscussionEmbed style={{ width: "100%" }} {...disqusConfig} />
          </Footer>
        </Row>
      </Section>
    </>
  )
}

export default SectionAboutComponent
