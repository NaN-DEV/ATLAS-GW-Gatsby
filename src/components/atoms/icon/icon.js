// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// IMPORT STYLES
import Icon from "./style/style"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/theme/settings"

// IMPORT COMPONENT ICON
import Tel from "./tel/tel"
import Address from "./address/address"
import Facebook from "./facebook/facebook"
import YouTube from "./youtube/youtube"

// CREATE NEW COMPONENT

const IconComponent = props => {
  const {
    tel,
    link,
    width,
    height,
    address,
    youtube,
    facebook,
    className,
    secondary,
    widthMobile,
    heightMobile,
  } = props

  return (
    <>
      {link ? (
        <Icon
          theme={theme}
          new_width={width}
          new_height={height}
          className={className}
          width_mobile={widthMobile}
          height_mobile={heightMobile}
          secondary={secondary ? 1 : 0}
        >
          <Link to={link}>
            {tel && <Tel />}
            {address && <Address />}
            {facebook && <Facebook />}
            {youtube && <YouTube />}
          </Link>
        </Icon>
      ) : (
        <Icon
          theme={theme}
          new_width={width}
          new_height={height}
          className={className}
          width_mobile={widthMobile}
          height_mmobile={heightMobile}
          secondary={secondary ? 1 : 0}
        >
          {tel && <Tel />}
          {address && <Address />}
          {facebook && <Facebook />}
          {youtube && <YouTube />}
        </Icon>
      )}
    </>
  )
}

export default IconComponent

IconComponent.propTypes = {
  link: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  widthMobile: PropTypes.string,
  heightMobile: PropTypes.string,
}

IconComponent.defaultProps = {
  link: null,
  width: null,
  height: null,
  className: null,
  secondary: false,
  widthMobile: null,
  heightMobile: null,
}
