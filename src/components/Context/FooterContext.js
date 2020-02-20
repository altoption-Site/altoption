import React, { createContext, useContext, useState } from "react"

const FooterContext = createContext()
const FooterProvider = FooterContext.Provider

export function FooterWrapper({ children }) {
  const [footer, setFooter] = useState("")

  function fillFooter({ allSanityFooter }) {
    const footerData = allSanityFooter.edges.reduce((acc, { node }) => node, {})
    setFooter(footerData)
  }
  return (
    <FooterProvider value={{ footer, fillFooter }}>{children}</FooterProvider>
  )
}

export function useFooterContent() {
  return useContext(FooterContext)
}
