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
  const { slug, url, title, secondary, length, name, id } = props

  return (
    <>
      {url ? (
        <Li
          theme={theme}
          secondary={secondary ? 1 : 0}
          length={length}
          key={id}
        >
          <a href={url} title={title} target="_blank" rel="noopener noreferrer">
            {name === "Facebook" && (
              <Icon height="30px" width="30px" facebook />
            )}
            {name === "YouTube" && <Icon height="30px" width="30px" youtube />}
          </a>
        </Li>
      ) : (
        <Li theme={theme} secondary={secondary ? 1 : 0} key={id}>
          <Link
            to={slug === "home" ? "/" : slug}
            title={title}
            secondary={secondary ? 1 : 0}
          >
            {name === "Facebook" && (
              <Icon height="30px" width="30px" facebook />
            )}
            {name === "YouTube" && <Icon height="30px" width="30px" youtube />}
          </Link>
        </Li>
      )}
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
