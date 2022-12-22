import { useSetCtxData } from "./set-context-data";

export function useSobreNosHook({ data, location }) {
  useSetCtxData({ data, location });

  return clean_about_us_page(data.allSanityAboutUs);
}

function clean_about_us_page(obj) {
  const data = obj.edges.reduce((_, { node }) => node, {});

  const {
    aboutBgColor: about_bg_color,
    aboutImg: about_img,
    aboutUsLeft: about_us_left,
    teamRight: team_right,
    ...rest
  } = data;

  return {
    about_bg_color,
    about_img,
    about_us_left,
    team_right,
    ...rest,
  };
}
