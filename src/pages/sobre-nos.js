import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { usePath } from "../components/Context/LogoContext"
import { useFooterContent } from "../components/Context/FooterContext"
import { cleanPath } from "../lib/cleanPath"

export const query = graphql`
  query allAboutUs {
    allSanityAboutUs {
      edges {
        node {
          aboutUsLeft
          intro
          partnerships
          team
          teamRight
        }
      }
    }
    allSanityFooter {
      edges {
        node {
          email
          address
          email
          companyInfo
          fax
          phone
        }
      }
    }
  }
`

const AboutUs = ({ data, location }) => {
  const { pathDefiner } = usePath()
  const { fillFooter } = useFooterContent()
  const path = cleanPath(location)
  pathDefiner(path)
  fillFooter(data)
  console.log(data)
  return (
    <Layout>
      <h1>About Me</h1>
    </Layout>
  )
}

export default AboutUs
