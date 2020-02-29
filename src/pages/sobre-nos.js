import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { usePath } from "../components/Context/LogoContext"
import { useFooterContent } from "../components/Context/FooterContext"
import { cleanPath } from "../lib/cleanPath"
import styled from "styled-components"
import { cleanAboutUsPage } from "../lib/cleanData"
import { computer } from "../utils/imageUpload"
import ReactMarkdown from "react-markdown"

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

const AboutUsPage = styled.div`
  width: 100%;
  margin-top: 11rem;
  position: relative;
  margin-bottom: 20rem;
  color: var(--black);
  h2 {
    font-size: 2.5rem;
    line-height: 150%;
    margin-bottom: 5rem;
  }

  .divide {
    display: flex;
    justify-content: space-between;
    margin-bottom: 11rem;
    p {
      font-size: 1.75rem;
      line-height: 150%;
    }
  }

  .full {
    margin-bottom: 11rem;
    min-height: 392px;
    height: 392px;
  }

  .parallax {
    height: 392px;
    background-image: ${({ img }) => `url(${img})`};
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
  }

  .bottom {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    /* justify-content: space-between; */
    h1 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
    p {
      font-size: 1.75rem;
      line-height: 150%;
      margin-bottom: 1rem;
    }
  }
`

const AboutUs = ({ data, location }) => {
  const { pathDefiner } = usePath()
  const { fillFooter } = useFooterContent()
  const path = cleanPath(location)
  pathDefiner(path)
  fillFooter(data)
  const aboutUsData = cleanAboutUsPage(data.allSanityAboutUs)
  console.log(aboutUsData)

  return (
    <Layout>
      <AboutUsPage img={computer}>
        <h2>{aboutUsData.intro}</h2>
        <div className="divide">
          <p>{aboutUsData.aboutUsLeft}</p>
          <p>{aboutUsData.teamRight}</p>
        </div>
        <div className="full">
          <div className="parallax"></div>
        </div>
        <div className="bottom">
          <div className="team">
            <h1>Equipa</h1>
            <ReactMarkdown source={aboutUsData.team} />
          </div>
          <div className="partnerships">
            <h1>Parcerias</h1>
            <ReactMarkdown source={aboutUsData.partnerships} />
          </div>
        </div>
      </AboutUsPage>
    </Layout>
  )
}

export default AboutUs
