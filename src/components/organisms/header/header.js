// IMPORT PLUGIN
import React from "react"
import { graphql, StaticQuery } from "gatsby"
// IMPORT SETTINGS STYLE
import theme from "../../../layouts/theme/settings"
import Logo from "../../atoms/logo/logo"
// IMPORT COMPONENT
import Row from "../../atoms/row/row"
import Icon from "../../atoms/icon/icon"
import List from "../../molecules/list/list"

// IMPORT STYLES
import {
  Header,
  BoxLink,
  BoxLogo,
  BoxAdress,
  BoxTelephone,
  BoxFullAdress,
} from "./style/style"

// CREATE NEW COMPONENT

const HeaderComponent = poprs => {
  return (
    <StaticQuery
      query={graphql`
        query Header {
          allDatoCmsDataContact {
            nodes {
              numberTelephone
              localization {
                city
                codePost
                street
              }
            }
          }
        }
      `}
      render={data => {
        const telephoneNumber =
          "+48" + data.allDatoCmsDataContact.nodes[0].numberTelephone
        const mainAdress = data.allDatoCmsDataContact.nodes[0].localization[0]
        return (
          <>
            <Header theme={theme}>
              <Row className="row">
                <BoxLogo theme={theme}>
                  <Logo height="60px" />
                </BoxLogo>
                <BoxLink theme={theme}>
                  <List level items={poprs.mainMenu} key="main_menu" />
                </BoxLink>
                <BoxFullAdress>
                  <BoxTelephone>
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
                </BoxFullAdress>
              </Row>
            </Header>
          </>
        )
      }}
    />
  )
}

export default HeaderComponent
