import React from "react"

import Section from "../components/organisms/section/section"

const Tutorial = props => {
  const index = props.pageContext.index
  const content = props.pageContext.content
  return (
    <>
      <Section full tutorial index={props.pageContext.index} />
    </>
  )
}

export default Tutorial
