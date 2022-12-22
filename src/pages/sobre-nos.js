import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useSobreNosHook } from "../hooks/sobre-nos.hook";
import { computer } from "../lib/images";
import ReactMarkdown from "react-markdown";

export default function SobreNos({ data, location }) {
  const about_us_data = useSobreNosHook({ data, location });
  return (
    <Layout>
      <AboutUsPage img={computer}>
        <h2>{about_us_data.intro}</h2>
        <div className="divide">
          <p>{about_us_data.about_us_left}</p>
          <p>{about_us_data.teamRight}</p>
        </div>
        <div className="full">
          <div className="parallax"></div>
        </div>
        <div className="bottom">
          <div className="team">
            <h1>Equipa</h1>
            <ReactMarkdown children={about_us_data.team} />
          </div>
          <div className="partnerships">
            <h1>Parcerias</h1>
            <ReactMarkdown children={about_us_data.partnerships} />
          </div>
        </div>
      </AboutUsPage>
    </Layout>
  );
}

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
          aboutBgColor
          aboutImg {
            ...ImageWithPreview
          }
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
`;

const AboutUsPage = styled.main`
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
`;

export const Head = () => <title>altoption - Sobre nós</title>;
