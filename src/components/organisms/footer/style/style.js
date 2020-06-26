import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.secondary};

  .row {
    justify-content: center;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    .row {
      justify-content: flex-start;
    }
  }
`

export const BoxLogo = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  justify-content: center;
  padding-bottom: ${props => props.theme.break_mobile};
  border-bottom: ${props => props.theme.border} solid
    ${props => props.theme.primary};

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding-bottom: ${props => props.theme.break_desctop};
  }
`

export const BoxLink = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  justify-content: center;
  padding: ${props => props.theme.break_mobile} 0;
  border-bottom: ${props => props.theme.border} solid
    ${props => props.theme.primary};
  a {
    text-transform: uppercase;
    font-size: 18px;
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding: ${props => props.theme.break_desctop} 0;
  }
`
export const BoxTelephone = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  justify-content: flex-start;
  a {
    font-size: 22px;
    font-weight: bold;
    line-height: 1;
    padding: 0 0 0 15px;
    margin: 0;
  }
`
export const BoxAdress = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  span {
    flex: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    font-size: 22px;
    align-items: center;
  }
  span:last-of-type {
    svg {
      opacity: 0;
    }
  }
  p {
    padding: 0 0 0 15px;
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    justify-content: center;
  }
`
export const BoxFullAdress = styled.div`
  flex: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: ${props => props.theme.break_mobile};
  border-bottom: ${props => props.theme.border} solid
    ${props => props.theme.primary};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    justify-content: flex-start;
    padding-bottom: ${props => props.theme.break_desctop};
  }
`
export const BoxAdressWrapper = styled.div`
  flex: 235px;
  max-width: 235px;
  position: relative;
`

export const BoxSocialMedia = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.break_mobile} 0;
  border-bottom: ${props => props.theme.border} solid
    ${props => props.theme.primary};

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    align-items: flex-end;
    justify-content: flex-end;
    padding: ${props => props.theme.break_desctop} 0;
  }
`

export const BoxAuthor = styled.div`
  display: flex;
  padding-top: ${props => props.theme.break_mobile};
  a {
    display: flex;
    font-size: 15px;
    align-items: center;
    justify-content: flex-start;
    &:hover {
      svg {
        fill: ${props => props.theme.primary_hover};
      }
    }
  }
  svg {
    width: 60px;
    margin-right: 15px;
    fill: ${props => props.theme.primary};
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 50%;
    max-width: 50%;
    padding-top: ${props => props.theme.break_desctop};
  }
`
