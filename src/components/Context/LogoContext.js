import React, { createContext, useContext, useState } from "react"

const LogoContext = createContext()
const LogoContextProvider = LogoContext.Provider

export function LogoProvider({ children }) {
  const [path, setPath] = useState("")

  function pathDefiner(arg) {
    setPath(arg)
  }
  return (
    <LogoContextProvider value={{ path, pathDefiner }}>
      {children}
    </LogoContextProvider>
  )
}

export function usePath() {
  return useContext(LogoContext)
}
