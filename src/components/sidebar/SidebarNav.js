import React from "react";

import SidebarNavSection from "./SidebarNavSection";

const SidebarNav = ({ items }) => {
  return (
    <ul className="sidebar-nav">
      {items &&
        items.map((item) => (
          <SidebarNavSection
            key={item.title}
            pages={item.pages}
            title={item.title}
          />
        ))}
    </ul>
  );
};

export default SidebarNav;
