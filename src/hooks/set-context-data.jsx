import React, { useEffect } from "react";
import { useFooterContent, useLogoContent } from "../components/Context";
import { clean_path, string_cleaning } from "../lib/clean-data";

export function useSetCtxData({ data, location }) {
  const { path_definer } = useLogoContent();
  const { fill_footer } = useFooterContent();

  const path = clean_path(location);

  useEffect(() => {
    fill_footer(data);
    path_definer(path);
  }, [data, path, path_definer, fill_footer]);
}
