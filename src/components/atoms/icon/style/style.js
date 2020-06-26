import styled from "styled-components"

const Icon = styled.div`
  width: ${props =>
    props.width_mobile
      ? props.width_mobile
      : `${props.new_width ? props.new_width : "1.2rem"}`};
  height: ${props =>
    props.height_mobile
      ? props.height_mobile
      : `${props.new_height ? props.new_height : "1.2rem"}`};
  a {
    width: ${props =>
      props.width_mobile
        ? props.width_mobile
        : `${props.new_width ? props.new_width : "1.2rem"}`};
    height: ${props =>
      props.height_mobile
        ? props.height_mobile
        : `${props.new_height ? props.new_height : "1.2rem"}`};
  }
  svg {
    width: ${props =>
      props.width_mobile
        ? props.width_mobile
        : `${props.new_width ? props.new_width : "1.2rem"}`};
    height: ${props =>
      props.height_mobile
        ? props.height_mobile
        : `${props.new_height ? props.new_height : "1.2rem"}`};
    display: block;
    path {
      fill: ${props =>
        props.secondary === 1 ? props.theme.secondary : props.theme.primary};
    }
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    width: ${props =>
      props.width_mobile
        ? props.width_mobile
        : `${props.new_width ? props.new_width : "1.2rem"}`};
    height: ${props =>
      props.height_mobile
        ? props.height_mobile
        : `${props.new_height ? props.new_height : "1.2rem"}`};
    a {
      width: ${props =>
        props.width_mobile
          ? props.width_mobile
          : `${props.new_width ? props.new_width : "1.2rem"}`};
      height: ${props =>
        props.height_mobile
          ? props.height_mobile
          : `${props.new_height ? props.new_height : "1.2rem"}`};
    }
    svg {
      width: ${props =>
        props.width_mobile
          ? props.width_mobile
          : `${props.new_width ? props.new_width : "1.2rem"}`};
      height: ${props =>
        props.height_mobile
          ? props.height_mobile
          : `${props.new_height ? props.new_height : "1.2rem"}`};
    }
  }
`

export default Icon
