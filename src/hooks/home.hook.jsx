import React from "react";
import { string_cleaning } from "../lib/clean-data";
import { useSetCtxData } from "./set-context-data";

export function useHome({ data, location }) {
  useSetCtxData({ data, location });

  return clean_home_page_data(data.allSanityHomePage);
}

function clean_home_page_data(obj) {
  const data = obj.edges.reduce((_, { node }) => node, {});

  const { services = [], homeBgColor: home_bg_color, homeImg: home_img } = data;

  const description = data.heroDescription;
  const tag_line = string_cleaning(data.tagline);
  const { services_left, services_right } = services.reduce(
    (acc, el, i) => {
      if (i < services.length / 2) {
        acc.services_left.push(<li key={el}>{el}</li>);
      } else {
        acc.services_right.push(<li key={el}>{el}</li>);
      }

      return acc;
    },
    { services_left: [], services_right: [] }
  );

  return {
    description,
    tag_line,
    services_left,
    services_right,
    home_bg_color,
    home_img,
  };
}
