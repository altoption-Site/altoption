import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import { useHome } from "../hooks/home.hook";
import { tick } from "../lib/images";
import Image from "gatsby-plugin-sanity-image";

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
            ...ImageWithPreview
          }
          # homeImg {
          #   asset {
          #     gatsbyImageData
          #   }
          # }
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

const IndexPage = ({ data, location }) => {
  console.log("data:", data);
  const home_page_data = useHome({ data, location });
  console.log("home_page_data:", home_page_data);

  return (
    <Layout>
      <MainHero>
        <div className="image">
          <Image {...home_page_data.home_img} />
          <div className="hero">
            <h1 dangerouslySetInnerHTML={home_page_data.tag_line} />
            <p>{home_page_data.description}</p>
          </div>
        </div>
      </MainHero>
      <HomeBody>
        <div className="solucoes">
          <div className="list">
            <h3>As soluçōes que oferecemos</h3>
            <h6 style={{ marginBottom: "24px", fontWeight: "normal" }}>
              A alt.option, disponibiliza no seu portfolio serviços de:
            </h6>
            <div className="lists">
              <ul>{home_page_data.services_left}</ul>
              <ul>{home_page_data.services_right}</ul>
            </div>
          </div>
          <div className="flexi">
            <Link to="/servicos">
              <Button styleType="primary">Ver mais</Button>
            </Link>
          </div>
        </div>
      </HomeBody>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <title>altoption - Tratamos o problema como nosso</title>
);

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
    img {
      width: 100%;
      height: 100%;
    }
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
      font-size: 3rem;
      margin-bottom: 32px;
      font-weight: 300;
      strong {
        font-weight: bold;
      }
    }
    p {
      font-family: "Roboto";
      font-size: 2rem;
      line-height: 150%;
      margin-bottom: 40px;
    }
  }
`;

const HomeBody = styled.section`
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
      font-size: 20px;
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
  .list {
    margin-bottom: 24px;
  }

  .flexi {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
