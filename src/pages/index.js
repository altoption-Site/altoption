import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import {
  mainHero,
  computerStandWithShadow,
  tick,
  logosPlaceholder,
} from "../utils/imageUpload"
import { Button } from "../styles/Button"
import { cleanPath } from "../lib/cleanPath"
import { usePath } from "../components/Context/LogoContext"
import { cleanHomePageData } from "../lib/cleanData"
import { useFooterContent } from "../components/Context/FooterContext"
import Img from "gatsby-image"
import BgImage from "gatsby-background-image"

export const query = graphql`
  query allHomePage {
    allSanityHomePage {
      edges {
        node {
          tagline
          heroDescription
          services
          homeBgColor
          homeImg {
            asset {
              fluid {
                src
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    allSanityFooter {
      edges {
        node {
          email
          address
          companyInfo
          fax
          phone
        }
      }
    }
  }
`

const MainHero = styled.header`
  color: white;
  text-align: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 160px;
  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
  }

  .hero {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 36px;
      margin-bottom: 32px;
      font-weight: 300;
      strong {
        font-weight: bold;
      }
    }
    p {
      font-family: "Roboto";
      font-size: 16px;
      line-height: 150%;
      margin-bottom: 40px;
    }
  }
`

const Test = styled.section`
  display: flex;
  color: black;
  font-size: 2rem;
  justify-content: space-between;
  margin-bottom: 20rem;
  h3 {
    font-size: 24px;
    margin-bottom: 24px;
  }
  h6 {
    font-size: 2rem;
    line-height: 150%;
    margin-bottom: 24px;
    font-weight: normal;
  }

  .solucoes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  img {
    height: 10%;
    padding: 0;
    margin: 0;
  }
  .lists {
    display: flex;
    justify-content: space-between;
    ul {
      list-style: none;
      margin: 0 1rem;
    }
    li {
      display: flex;
      align-items: center;
      &::before {
        content: "";
        height: 100%;
        /* margin-left: -15px; */
        margin-right: 15px;
        background-image: url(${tick}); /*url of image*/
        background-repeat: no-repeat;
        background-size: center;
        display: block;
        height: 16px; /*height of image*/
        width: 20px; /*width of image*/
        /* position: absolute; */
      }
    }
  }
`

const Clients = styled.section`
  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  .logos {
    /* display: grid; */
    /* grid-gap: 2rem;
    grid-template-columns: repeat() (auto-fit, minmax: 5rem, 1fr); */
    img {
      width: 100%;
    }
  }
`

const colors = ["red", "yellow", "orange", "pink"]

const Index = ({ data, location }) => {
  const { pathDefiner } = usePath()
  const { fillFooter } = useFooterContent()

  const path = cleanPath(location)
  fillFooter(data)
  pathDefiner(path)

  const homePageData = cleanHomePageData(data.allSanityHomePage)

  return (
    <Layout>
      <MainHero>
        {/* <div className="image"> */}
        <BgImage
          fluid={homePageData.homeImage}
          Tag="div"
          className="image"
          backgroundColor={homePageData.homeBgColor}
        >
          {/* <Img fluid={homePageData.homeImage} /> */}
          <div className="hero">
            <h1 dangerouslySetInnerHTML={homePageData.tagline} />
            <p>{homePageData.description}</p>
            {/* <Link to="/servicos">
              <Button styleType="primary">Veja os nossos serviços</Button>
            </Link> */}
          </div>
        </BgImage>

        {/* </div> */}
      </MainHero>
      <Test>
        <div className="solucoes">
          <div className="list">
            <h3>As soluçōes que oferecemos</h3>
            <h6 style={{ marginBottom: "24px", fontWeight: "normal" }}>
              A alt.option, disponibiliza no seu portfolio serviços de:
            </h6>
            <div className="lists">
              <ul>{homePageData.servicesLeft}</ul>
              <ul>{homePageData.servicesRight}</ul>
            </div>
          </div>
          <Link to="/servicos">
            <Button styleType="primary">Ver mais</Button>
          </Link>
        </div>
        {/* <div className="stuff"> */}
        <img src={computerStandWithShadow} />
        {/* </div> */}
      </Test>
      {/* <Clients>
        <h1>Os nossos parceiros</h1>
        <div className="logos">
          <img src={logosPlaceholder} />
        </div>
      </Clients> */}
    </Layout>
  )
}

export default Index
