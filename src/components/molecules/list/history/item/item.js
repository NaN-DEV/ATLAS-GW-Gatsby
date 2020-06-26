// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import theme from "../../../../../layouts/theme/settings"

// IMPORT STYLE
import Li from "./style/style"

// IMPORT COMPONENT
import Icon from "../../../../atoms/icon/icon"

// CREATE NEW COMPONENT

const LiComponent = props => {
  const { item, secondary, length, key, id } = props

  return (
    <>
      <Li theme={theme} secondary={secondary ? 1 : 0} length={length} key={id}>
        ook
      </Li>
    </>
  )
}

export default LiComponent

LiComponent.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
}

LiComponent.defaultProps = {
  link: "/",
}
