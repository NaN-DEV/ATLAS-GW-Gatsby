import React from "react"
import Section from "../components/organisms/section/section"

const Events = props => {
  const index = props.pageContext.index
  const content = props.pageContext.content
  return (
    <>
      <Section full event index={props.pageContext.index} />
    </>
  )
}

export default Events
