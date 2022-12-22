import { useSetCtxData } from "./set-context-data";

export function useServicos({ data, location }) {
  useSetCtxData({ data, location });

  return clean_services_page(data.allSanityServiceList);
}

function clean_services_page(obj) {
  const data = obj.edges.reduce((acc, { node }) => node, {});

  return {
    services_list: data.servicesList,
    tagline: data.tagline,
  };
}
