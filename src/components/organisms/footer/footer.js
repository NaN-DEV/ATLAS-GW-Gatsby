// IMPORT PLUGIN
import React from "react"
import { graphql, StaticQuery } from "gatsby"

// IMPORT SVG
import Author from "../../../assets/logo/author.svg"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/theme/settings"
import Logo from "../../atoms/logo/logo"

// IMPORT COMPONENT
import Row from "../../atoms/row/row"
import Icon from "../../atoms/icon/icon"
import List from "../../molecules/list/list"

// IMPORT STYLES
import {
  Footer,
  BoxLogo,
  BoxLink,
  BoxFullAdress,
  BoxTelephone,
  BoxAdress,
  BoxAuthor,
  BoxSocialMedia,
  BoxAdressWrapper,
} from "./style/style"

// CREATE NEW COMPONENT

const FooterComponent = poprs => {
  return (
    <StaticQuery
      query={graphql`
        query Footer {
          allDatoCmsDataContact {
            nodes {
              numberTelephone
              localization {
                city
                codePost
                street
              }
              socialMedia {
                url
                name
                id
              }
            }
          }
        }
      `}
      render={data => {
        const telephoneNumber =
          "+48" + data.allDatoCmsDataContact.nodes[0].numberTelephone
        const mainAdress = data.allDatoCmsDataContact.nodes[0].localization[0]
        const socialMedia = data.allDatoCmsDataContact.nodes[0].socialMedia
        return (
          <>
            <Footer theme={theme}>
              <Row className="row">
                <BoxLogo theme={theme}>
                  <Logo height="60px" />
                </BoxLogo>
                <BoxLink theme={theme}>
                  <List level items={poprs.mainMenu} />
                </BoxLink>
                <BoxFullAdress theme={theme}>
                  <BoxAdressWrapper>
                    <BoxTelephone theme={theme}>
                      <Icon tel />
                      <a
                        href={`tel:${telephoneNumber}`}
                        title={`Telefon pomocy drogowej : ${telephoneNumber.replace(
                          /(.{3})/g,
                          " $&"
                        )}`}
                      >
                        {telephoneNumber.replace(/(.{3})/g, " $&")}
                      </a>
                    </BoxTelephone>
                    <BoxAdress>
                      <span>
                        <Icon address />
                        <p>{`ul. ${mainAdress.street}`}</p>
                      </span>
                      <span>
                        <Icon address />
                        <p>{` ${mainAdress.codePost} ${mainAdress.city}`}</p>
                      </span>
                    </BoxAdress>
                  </BoxAdressWrapper>
                </BoxFullAdress>
                <BoxSocialMedia theme={theme}>
                  <List socialMedia items={socialMedia} />
                </BoxSocialMedia>
                <BoxAuthor theme={theme}>
                  <a
                    href="https://nan.nz"
                    title="NAN wykonał strone dla ATLAS pomoc drogowa"
                  >
                    <Author /> Corporight 2020
                  </a>
                </BoxAuthor>
              </Row>
            </Footer>
          </>
        )
      }}
    />
  )
}

export default FooterComponent
