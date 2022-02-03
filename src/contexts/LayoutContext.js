import React from "react";

import { LAYOUT } from "../constants";
import useSettingsState from "../hooks/useSettingsState";

const initialState = {
  layout: LAYOUT.FLUID,
};

const LayoutContext = React.createContext(initialState);

function LayoutProvider({ children }) {
  const [layout, setLayout] = useSettingsState("layout", LAYOUT.FLUID);

  return (
    <LayoutContext.Provider
      value={{
        layout,
        setLayout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutProvider, LayoutContext };
