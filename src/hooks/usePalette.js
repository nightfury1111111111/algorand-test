import { useState, useEffect } from "react";

import { THEME, THEME_PALETTE_LIGHT, THEME_PALETTE_DARK } from "../constants";

import useTheme from "./useTheme";

const usePalette = () => {
  const { theme } = useTheme();

  const [palette, setPalette] = useState(THEME_PALETTE_LIGHT);

  useEffect(() => {
    if (theme === THEME.DARK) {
      setPalette(THEME_PALETTE_DARK);
    } else {
      setPalette(THEME_PALETTE_LIGHT);
    }
  }, [theme]);

  return palette;
};

export default usePalette;
