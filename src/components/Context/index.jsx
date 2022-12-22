import React from "react";
import { FooterWrapper } from "./FooterContext";
import { LogoWrapper } from "./LogoContext";

export function ContextWrapper({ children }) {
  return (
    <LogoWrapper>
      <FooterWrapper>{children}</FooterWrapper>
    </LogoWrapper>
  );
}

export { useFooterContent } from "./FooterContext";
export { useLogoContent } from "./LogoContext";
