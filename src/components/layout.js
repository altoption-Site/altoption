import React from "react"
import GlobalStyle from "../styles/GlobalStyle"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
