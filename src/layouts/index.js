// IMPORT PLUGIN
import React from "react"

// IMPORT STYLE
import { GlobalStyle, SideBar, MainContent } from "./theme/globalStyle"

// IMPORT SETTINGS STYLE
import theme from "./theme/settings"

// IMPORT COMPONENT
import Row from "../components/atoms/row/row"
import Header from "../components/organisms/header/header"
import Footer from "../components/organisms/footer/footer"

const Root = props => {
  const { children } = props
  const MainMenu = [
    {
      title: "Strona główna",
      id: "menu_main_home_iij2i93",
      slug: "/",
    },
    {
      title: "Wydarzenia",
      id: "menu_main_Wydarzenia_ijdeiuw",
      slug: "/wydarzenia",
    },
    {
      title: "Poradniki",
      id: "menu_main_Poradniki_ijcdcdeiuw",
      slug: "/poradniki",
    },
    {
      title: "O firmie",
      id: "menu_main_o_firmie_ijdefef4iuw",
      slug: "/o-firmie",
    },
    {
      title: "Kontakt",
      id: "menu_main_kontakt_ijd33eiuw",
      slug: "/kontakt",
    },
  ]
  return (
    <>
      <GlobalStyle theme={theme} />
      <Header mainMenu={MainMenu} />
      <Row>
        <SideBar theme={theme}></SideBar>
        <MainContent theme={theme}>{children}</MainContent>
      </Row>
      <Footer mainMenu={MainMenu} />
    </>
  )
}

export default Root
