import styled, { css } from "styled-components"

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.muted};
  margin-bottom: ${props => props.theme.break_mobile};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    margin-bottom: ${props => props.theme.break_desctop};
  }
`

export const Header = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  padding-bottom: ${props => props.theme.break_mobile};
  border-bottom: ${props => props.theme.border} solid
    ${props => props.theme.secondary};
  h1 {
    font-size: 1.6rem;
  }
`

export const Content = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  padding: ${props => props.theme.break_mobile} 0;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    padding: ${props => props.theme.break_desctop} 0;
  }
`
export const BoxData = styled.div`
  flex: 100%;
  max-width: 100%;
  font-size: 12px;
  line-height: 1.6;
  padding-bottom: 5px;
`
export const BoxImg = styled.div`
  flex: 100%;
  max-width: 100%;
`
export const BoxDescription = styled.div`
  flex: 100%;
  max-width: 100%;
  padding-top: ${props => props.top && "20px"};
  h1 {
    font-size: 30px;
    padding-bottom: 15px;
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    font-size: 15px;
    padding-top: ${props => props.top && "40px"};
  }
`
export const FullDescription = styled.div`
  width: 100%;
  display: block;
  padding-top: 30px;
  font-size: 15px;
  line-height: 1.6;
  position: relative;
  text-align: justify;
`

export const Footer = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  justify-content: flex-end;
  padding-top: ${props => props.theme.break_mobile};
  border-top: ${props => props.theme.border} solid
    ${props => props.theme.secondary};
  a {
    font-size: 15px;
  }
`
