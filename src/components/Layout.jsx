import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

const GlobalStyle = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}

html {
	font-size: 10px; font-family:'Roboto', sans-serif;
	--black : #03023; --dark-blue: #050535;
}

a {
	text-decoration: none
}
`;

const MainContainer = styled.main`
  width: 75%;
  max-width: 980px;
  margin: 0 auto;
  font-size: 8px;
`;

export function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
}
