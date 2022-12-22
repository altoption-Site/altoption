import React from "react";
import { ContextWrapper } from "./src/components/Context";
import "./static/fonts.css";

export const wrapRootElement = ({ element }) => (
  <ContextWrapper>{element}</ContextWrapper>
);
