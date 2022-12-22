import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useServicos } from "../hooks/servicos.hook";
import ReactMarkdown from "react-markdown";

export default function Servicos({ data, location }) {
  const service_page_data = useServicos({ data, location });
  console.log("service_page_data:", service_page_data);

  return (
    <Layout>
      <ServicePage>
        <div className="tagline">{service_page_data.tagline}</div>
        <div className="serviceList">
          {service_page_data.services_list.map((el) => (
            <div key={el.description} className="individualService">
              <h4>{el.title}</h4>
              <ReactMarkdown children={el.description} />{" "}
            </div>
          ))}
        </div>
      </ServicePage>
    </Layout>
  );
}

export const Head = () => <title>altoption - Serviços</title>;

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
`;

const ServicePage = styled.main`
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
`;
