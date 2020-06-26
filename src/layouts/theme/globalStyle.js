import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
   box-sizing: border-box;
   -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased;
}

html{
   font-size: 62.5%;
}

body {
   margin: 0;
   padding: 0;
   font-weight: 400;
   line-height: 1.3;
   font-size: 2.4rem;
   min-height: 100vh;
   font-style: normal;
   font-family: "Montserrat", sans-serif;
   color: ${props => props.theme.primary};
   background-color:${props => props.theme.light};
}

p,
h1,
h2,
h3,
h4,
h5,
h6{
    margin:0;
    padding:0;
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong{
    font-weight: 600;
}

p,
span{
   font-weight: 300;
}

a {
   font-weight: 600;
   text-decoration: none;
   color: ${props => props.theme.primary};
   transition: ${props => props.theme.animation_time};
   &:hover{
         color:  ${props => props.theme.primary_hover};
   }
}

button{
   margin:0;
   padding: 0;
   border: none;
   display: block;
   position: relative;
   cursor: pointer !important;
   background-color: transparent;
   transition: ${props => props.theme.animation_time};

     &:focus{
       outline:none;
     }
}

ol,
ul{
   margin:0;
   padding:0;
}
section{
    overflow: hidden;
    position: relative;
}
`

export const SideBar = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    flex: 235px;
    width: 235px;
    display: block;
    position: relative;
  }
`
export const MainContent = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    top: -155px;
    padding-left: 30px;
    flex: calc(100% - 235px);
    max-width: calc(100% - 235px);
  }
`
