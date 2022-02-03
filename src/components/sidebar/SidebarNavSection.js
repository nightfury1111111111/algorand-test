import React from "react";

import SidebarNavList from "./SidebarNavList";

const SidebarNavSection = (props) => {
  const { title, pages, className, ...rest } = props;

  return (
    <React.Fragment {...rest}>
      {title && <li className="sidebar-header">{title}</li>}
      <SidebarNavList pages={pages} depth={0} />
    </React.Fragment>
  );
};

export default SidebarNavSection;
