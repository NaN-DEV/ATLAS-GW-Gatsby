// IMPORT PLUGIN
import React from "react"

// IMPORT COMPONENT
import Short from "./short/short"
import Full from "./full/full"
import About from "./about/about"

// CREATE NEW COMPONENT

const SectionComponent = props => {
  const { short, full, content, index, event, service, tutorial, about } = props
  return (
    <>
      {short && (
        <Short
          content={content}
          event={event ? true : false}
          service={service ? true : false}
          tutorial={tutorial ? true : false}
        />
      )}
      {full && (
        <Full
          index={index}
          event={event ? true : false}
          service={service ? true : false}
          tutorial={tutorial ? true : false}
        />
      )}
      {about && <About index={index} content={content} />}
    </>
  )
}

export default SectionComponent
