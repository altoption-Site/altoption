import React from "react";
import styled from "styled-components";
import { useLogoContent } from "./Context";
import { logo_color, logo_white } from "../lib/images";
import { Link } from "gatsby";

const StyledNavbar = styled.div`
  width: 100vw;
  color: white;
  height: 8rem;
  z-index: 1000;
  top: 0;
  position: ${({ position = "" }) => position};

  nav {
    height: 100%;
    margin: 0 auto;
    width: 100%;
    max-width: 980px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;

    .links {
      ul {
        list-style: none;
        display: flex;
        color: ${({ main_color }) => {
          return main_color;
        }};
      }

      li {
        margin-left: 7rem;
        color: ${({ main_color = "" }) => main_color};

        a {
          color: ${({ main_color = "" }) => main_color};
          text-decoration: none;
          &:active {
            color: ${({ main_color = "" }) => main_color};
          }
          &:visited {
            color: ${({ main_color = "" }) => main_color};
          }
        }

        .active {
          font-weight: bold;
        }
      }
    }
  }
`;

const pages = [
  { link: "/sobre-nos", text: "Sobre nós" },
  { link: "/servicos", text: "Serviços" },
];

export function NavBar() {
  const { logo_path } = useLogoContent();

  const logo = logo_path === "/" ? logo_white : logo_color;
  const main_color = logo_path === "/" ? "#fff" : "#000080";
  const position = logo_path === "/" ? "absolute" : "relative";

  return (
    <StyledNavbar position={position} main_color={main_color}>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo da altoption" />
        </Link>
        <div className="links">
          <ul>
            {pages.map((page_data) => {
              return (
                <li key={page_data.link}>
                  <Link to={page_data.link}>{page_data.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}
