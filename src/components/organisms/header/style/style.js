import styled from "styled-components"

export const Header = styled.header`
  width: 100%;
  height: auto;
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
  max-width: 100%;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 235px;
    max-width: 235px;
  }
`

export const BoxLink = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    display: flex;
    align-items: center;
    flex: calc(100% - 235px);
    justify-content: flex-end;
    max-width: calc(100% - 235px);
    a {
      text-transform: uppercase;
      font-size: 18px;
    }
  }
`
export const BoxTelephone = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0 0 0;
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
`
export const BoxFullAdress = styled.div`
  flex: 235px;
  max-width: 235px;
`
