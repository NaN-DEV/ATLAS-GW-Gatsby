import React from "react"
import Section from "../components/organisms/section/section"

const Service = props => {
  const index = props.pageContext.index
  const content = props.pageContext.content
  return (
    <>
      <Section full service index={props.pageContext.index} />
    </>
  )
}

export default Service
