import React from "react";
import styled from "styled-components";

import { string_cleaning } from "../lib/clean-data";
import { logo_white } from "../lib/images";
import { useFooterContent } from "./Context";

const StyledFooter = styled.div`
  margin-top: 20rem;
  width: 100vw;
  background-color: #030325;
  z-index: 1000;
  height: 30rem;

  footer {
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
    h4 {
      span {
        font-weight: 300;
      }

      article {
        height: 30%;
      }
    }
  }
`;

export function Footer() {
  const { footer } = useFooterContent();

  const headQuarters = string_cleaning(footer.companyInfo);

  return (
    <StyledFooter>
      <footer>
        <article>
          <img src={logo_white} alt="" />
        </article>
        <article>
          <ul>
            <li>E {footer.email}</li>
            <li>T {footer.phone}</li>
            <li>F {footer.fax}</li>
          </ul>
        </article>
        <article>
          <h4>
            <div dangerouslySetInnerHTML={headQuarters} />
            <span>{footer.address}</span>
          </h4>
        </article>
      </footer>
    </StyledFooter>
  );
}
