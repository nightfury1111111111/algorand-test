import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

import usFlag from "../../assets/img/flags/us.png";
import frFlag from "../../assets/img/flags/fr.png";
import deFlag from "../../assets/img/flags/de.png";
import nlFlag from "../../assets/img/flags/nl.png";

const languageOptions = {
  en: {
    icon: usFlag,
    name: "English",
  },
  fr: {
    icon: frFlag,
    name: "French",
  },
  de: {
    icon: deFlag,
    name: "German",
  },
  nl: {
    icon: nlFlag,
    name: "Dutch",
  },
};

const NavbarLanguages = () => {
  const { i18n } = useTranslation();

  const selectedLanguage = languageOptions[i18n.language];

  return (
    <Dropdown className="me-2 nav-item" align="end">
      <Dropdown.Toggle as="a" className="nav-link nav-flag">
        <img src={selectedLanguage.icon} alt={selectedLanguage.name} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.keys(languageOptions).map((language) => (
          <Dropdown.Item
            key={language}
            onClick={() => i18n.changeLanguage(language)}
          >
            <img
              src={languageOptions[language].icon}
              alt="English"
              width="20"
              className="align-middle me-1"
            />
            <span className="align-middle">
              {languageOptions[language].name}
            </span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarLanguages;
