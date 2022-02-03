import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useSettingsState(key, initialValue) {
  const [value, setValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    // Set data attribute on body element
    document.body.dataset[key] = value;

    // Replace style sheet if dark theme gets toggled
    if (key === "theme") {
      const theme = value === "dark" ? "dark" : "light";
      const stylesheet = document.querySelector(".js-stylesheet");
      stylesheet.setAttribute("href", `/css/${theme}.css`);
    }
  }, [value, key]);

  return [value, setValue];
}

export default useSettingsState;
