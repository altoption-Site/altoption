import React, { createContext, useContext, useState } from "react"
import { FooterWrapper } from "./FooterContext"

const LogoContext = createContext()
const LogoContextProvider = LogoContext.Provider

export function LogoProvider({ children }) {
  const [path, setPath] = useState("")

  function pathDefiner(arg) {
    setPath(arg)
  }
  return (
    <LogoContextProvider value={{ path, pathDefiner }}>
      <FooterWrapper>{children}</FooterWrapper>
    </LogoContextProvider>
  )
}

export function usePath() {
  return useContext(LogoContext)
}
