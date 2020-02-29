import React from "react"
import { graphql } from "gatsby"
import { cleanServicesPage } from "../lib/cleanData"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import Layout from "../components/layout"
import { usePath } from "../components/Context/LogoContext"
import { useFooterContent } from "../components/Context/FooterContext"
import { cleanPath } from "../lib/cleanPath"

export const query = graphql`
  query MyQuery {
    allSanityServiceList {
      edges {
        node {
          servicesList {
            description
            title
          }
          tagline
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

const ServicePage = styled.div`
  margin: 9rem auto 0;
  .tagline {
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--dark-blue);
    margin-bottom: 8.25rem;
  }

  .serviceList {
    margin: 0 auto;
    /* width: 80vw; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2.4rem;

    .individualService {
      box-shadow: 0 0 3.75rem rgba(0, 0, 0, 0.05);
      padding: 25px 20px;

      h4 {
        font-size: 2rem;
        color: var(--dark-blue);
        margin-bottom: 2rem;
      }

      p {
        font-size: 1.75rem;
        color: #8e8eab;
      }
    }
  }
`

const Services = ({ data, location }) => {
  const { pathDefiner } = usePath()
  const { fillFooter } = useFooterContent()
  const path = cleanPath(location)
  fillFooter(data)
  pathDefiner(path)
  const servicesData = cleanServicesPage(data.allSanityServiceList)
  console.log(servicesData)
  return (
    <Layout>
      <ServicePage>
        <div className="tagline">{servicesData.tagline}</div>
        <div className="serviceList">
          {servicesData.servicesList.map(el => (
            <div className="individualService">
              <h4>{el.title}</h4>
              <ReactMarkdown source={el.description} />{" "}
            </div>
          ))}
        </div>
      </ServicePage>
    </Layout>
  )
}

export default Services
