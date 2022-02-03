import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Alert, Button } from "react-bootstrap";

import { Sliders, BookOpen } from "react-feather";

import {
  SIDEBAR_POSITION,
  SIDEBAR_BEHAVIOR,
  LAYOUT,
  THEME,
} from "../constants";
import useOuterClick from "../hooks/useOuterClick";
import useTheme from "../hooks/useTheme";
import useSidebar from "../hooks/useSidebar";
import useLayout from "../hooks/useLayout";

const themeOptions = [
  {
    name: "Default",
    value: THEME.DEFAULT,
  },
  {
    name: "Colored",
    value: THEME.COLORED,
  },
  {
    name: "Dark",
    value: THEME.DARK,
  },
  {
    name: "Light",
    value: THEME.LIGHT,
  },
];

const sidebarPositionOptions = [
  {
    name: "Left",
    value: SIDEBAR_POSITION.LEFT,
  },
  {
    name: "Right",
    value: SIDEBAR_POSITION.RIGHT,
  },
];

const sidebarBehaviorOptions = [
  {
    name: "Sticky",
    value: SIDEBAR_BEHAVIOR.STICKY,
  },
  {
    name: "Fixed",
    value: SIDEBAR_BEHAVIOR.FIXED,
  },
  {
    name: "Compact",
    value: SIDEBAR_BEHAVIOR.COMPACT,
  },
];

const layoutOptions = [
  {
    name: "Fluid",
    value: LAYOUT.FLUID,
  },
  {
    name: "Boxed",
    value: LAYOUT.BOXED,
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Settings = () => {
  const query = useQuery();
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const { position, setPosition, behavior, setBehavior } = useSidebar();
  const { layout, setLayout } = useLayout();

  const innerRef = useOuterClick(() => {
    setIsOpen(false);
  });

  const setSettingByQueryParam = (name, set) => {
    const value = query.get(name);
    if (value) {
      set(value);
    }
  };

  // Read from query parameter (e.g. ?theme=dark)
  // only for demo purposes
  useEffect(() => {
    setSettingByQueryParam("theme", setTheme);
    setSettingByQueryParam("sidebarPosition", setPosition);
    setSettingByQueryParam("sidebarBehavior", setBehavior);
    setSettingByQueryParam("layout", setLayout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={innerRef}
      className={`settings js-settings ${isOpen ? "open" : ""}`}
    >
      <div className="settings-toggle">
        <div
          className="settings-toggle-option settings-toggle-option-text js-settings-toggle"
          title="Theme Builder"
          onClick={() => setIsOpen(true)}
        >
          <Sliders className="feather align-middle" /> Builder
        </div>
        <a
          className="settings-toggle-option"
          title="Documentation"
          href="/docs"
          target="_blank"
        >
          <BookOpen className="feather align-middle" />
        </a>
      </div>
      <div className="settings-panel">
        <div className="settings-content">
          <div className="settings-title d-flex align-items-center">
            <button
              type="button"
              className="btn-close float-right js-settings-toggle"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            ></button>
            <h4 className="mb-0 ms-2 d-inline-block">Theme Builder</h4>
          </div>
          <div className="settings-body">
            <Alert variant="primary">
              <div className="alert-message">
                <strong>Hey there!</strong> Set your own customized style below.
                Choose the ones that best fits your needs.
              </div>
            </Alert>

            <div className="mb-3">
              <span className="d-block font-size-lg fw-bold">Color scheme</span>
              <span className="d-block text-muted mb-2">
                The perfect color mode for your app.
              </span>
              <div className="row g-0 text-center mx-n1 mb-2">
                {themeOptions.map(({ name, value }) => (
                  <div className="col-6" key={value}>
                    <label className="mx-1 d-block mb-1">
                      <input
                        className="settings-scheme-label"
                        type="radio"
                        name="theme"
                        value={value}
                        checked={theme === value}
                        onChange={() => setTheme(value)}
                      />
                      <div className="settings-scheme">
                        <div
                          className={`settings-scheme-theme settings-scheme-theme-${value}`}
                        ></div>
                      </div>
                    </label>
                    {name}
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="mb-3">
              <span className="d-block font-size-lg fw-bold">
                Sidebar position
              </span>
              <span className="d-block text-muted mb-2">
                Toggle the position of the sidebar.
              </span>
              <div>
                {sidebarPositionOptions.map(({ name, value }) => (
                  <label className="me-1" key={value}>
                    <input
                      className="settings-button-label"
                      type="radio"
                      name="sidebarPosition"
                      value={value}
                      checked={position === value}
                      onChange={() => setPosition(value)}
                    />
                    <div className="settings-button">{name}</div>
                  </label>
                ))}
              </div>
            </div>
            <hr />
            <div className="mb-3">
              <span className="d-block font-size-lg fw-bold">
                Sidebar behavior
              </span>
              <span className="d-block text-muted mb-2">
                Change the behavior of the sidebar.
              </span>
              <div>
                {sidebarBehaviorOptions.map(({ name, value }) => (
                  <label className="me-1" key={value}>
                    <input
                      className="settings-button-label"
                      type="radio"
                      name="sidebarBehavior"
                      value={value}
                      checked={behavior === value}
                      onChange={() => setBehavior(value)}
                    />
                    <div className="settings-button">{name}</div>
                  </label>
                ))}
              </div>
            </div>
            <hr />
            <div className="mb-3">
              <span className="d-block font-size-lg fw-bold">Layout</span>
              <span className="d-block text-muted mb-2">
                Toggle container layout system.
              </span>
              <div>
                {layoutOptions.map(({ name, value }) => (
                  <label className="me-1" key={value}>
                    <input
                      className="settings-button-label"
                      type="radio"
                      name="layout"
                      value={value}
                      checked={layout === value}
                      onChange={() => setLayout(value)}
                    />
                    <div className="settings-button">{name}</div>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="settings-footer">
            <div className="d-grid">
              <Button
                as="a"
                rel="noreferrer"
                href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
                target="_blank"
                variant="primary"
                size="lg"
              >
                Purchase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
