import styled, { css } from "styled-components"

const Li = styled.li`
  flex: 100%;
  width: 100%;
  display: flex;
  margin: 7.5px 0;
  justify-content: center;

  a {
    ${props =>
      props.secondary === 1
        ? css`
            color: ${props.active
              ? props.theme.secondary
              : props.theme.secondary};
          `
        : css`
            color: ${props.active ? props.theme.primary : props.theme.primary};
          `}
              transition: ${props => props.theme.animation_time};
  }

  svg{
    path{
       transition: ${props => props.theme.animation_time};
       ${props =>
         props.secondary === 1
           ? css`
               fill: ${props.active
                 ? props.theme.secondary
                 : props.theme.secondary};
             `
           : css`
               fill: ${props.active
                 ? props.theme.primary
                 : props.theme.primary};
             `}
    }
  }


  &:hover {
    a {
      ${props =>
        props.secondary === 1
          ? css`
              color: ${props.active
                ? props.theme.secondary_hover
                : props.theme.secondary_hover};
            `
          : css`
              color: ${props.active
                ? props.theme.primary_hover
                : props.theme.primary_hover};
            `}
    }
      svg{
    path{
       ${props =>
         props.secondary === 1
           ? css`
               fill: ${props.active
                 ? props.theme.secondary_hover
                 : props.theme.secondary_hover};
             `
           : css`
               fill: ${props.active
                 ? props.theme.primary_hover
                 : props.theme.primary_hover};
             `}
    }
  }
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: none;
    width: auto;
    margin: 0px 15px;
    &:last-of-type{
      margin: 0px 0 0 15px;
    }
  }
`

export default Li
