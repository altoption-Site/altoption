import React from "react"
import styled from "styled-components"
import { logoWhite } from "../utils/imageUpload"
import { useFooterContent } from "./Context/FooterContext"
import { stringCleaning } from "../lib/cleanData"

const FooterS = styled.div`
  margin-top: 20rem;
  width: 100vw;
  background-color: #030325;
  z-index: 1000000;
  height: 30rem;
`

const FooterStyled = styled.footer`
  color: #fff;

  height: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 980px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  font-size: 2rem;

  ul {
    list-style: none;
    li {
    }
  }
`

// const NavBarS = styled.div`
//   width: 100vw;
//   color: white;
//   height: 8rem;
//   z-index: 1000000;
//   top: 0;
//   position: absolute;
// `

const Footer = () => {
  const { footer } = useFooterContent()
  const headQuarters = stringCleaning(footer.companyInfo)
  console.log(footer)
  return (
    <FooterS>
      <FooterStyled>
        <div style={{ height: "30%" }}>
          <img src={logoWhite} />
        </div>
        <div style={{ height: "30%" }}>
          <ul>
            <li>E {footer.email}</li>
            <li>T {footer.phone}</li>
            <li>F {footer.fax}</li>
          </ul>
        </div>
        <div style={{ height: "30%" }}>
          <h4>
            <div dangerouslySetInnerHTML={headQuarters} />
            {footer.address}
          </h4>
        </div>
      </FooterStyled>
    </FooterS>
  )
}

export default Footer
