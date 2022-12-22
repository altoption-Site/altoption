import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

const initial_state = {
  companyInfo: "",
  email: "",
  phone: "",
  fax: "",
  address: "",
};

const FooterContext = createContext({
  footer: initial_state,
  fill_footer: () => {},
});

export function FooterWrapper({ children }) {
  const [footer, dispatch] = useReducer((_, text) => text, initial_state);

  const fill_footer = useCallback(({ allSanityFooter }) => {
    // const footerData = allSanityFooter.
    const footer_data = allSanityFooter.edges.reduce(
      (acc, { node }) => node,
      {}
    );

    dispatch(footer_data);
  }, []);

  return (
    <FooterContext.Provider value={{ footer, fill_footer }}>
      {children}
    </FooterContext.Provider>
  );
}

export function useFooterContent() {
  return useContext(FooterContext);
}
