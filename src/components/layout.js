import React from "react"
import GlobalStyle from "../styles/GlobalStyle"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { MainContainer } from "../styles/BodyGeneral"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  )
}

export default Layout
