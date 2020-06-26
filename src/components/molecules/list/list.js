// IMPORT PLUGINS
import React from "react"

// IMPORT COMPONENT
import Social from "./social/social"
import LevelList from "./level/level"
import History from "./history/history"
import Vertical from "./vertical/vertical"

// CREATE NEW COMPONENT

const ListComponent = props => {
  const {
    socialMedia,
    level,
    vertical,
    items,
    menu,
    history,
    secondary,
    className,
  } = props
  return (
    <>
      {level && (
        <LevelList items={items} secondary={secondary} className={className} />
      )}
      {vertical && (
        <Vertical items={items} secondary={secondary} className={className} />
      )}
      {socialMedia && (
        <Social items={items} secondary={secondary} className={className} />
      )}
      {history && (
        <History items={items} secondary={secondary} className={className} />
      )}
    </>
  )
}

export default ListComponent
