import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

const LogoContext = createContext({ logo_path: "", path_definer: () => {} });

export function LogoWrapper({ children }) {
  const [logo_path, dispatch] = useReducer((_, l) => l, "");

  const path_definer = useCallback((newPath) => dispatch(newPath), []);

  return (
    <LogoContext.Provider value={{ logo_path, path_definer }}>
      {children}
    </LogoContext.Provider>
  );
}

export function useLogoContent() {
  return useContext(LogoContext);
}
