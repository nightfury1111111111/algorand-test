/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";

import { Badge, Collapse } from "react-bootstrap";

const CustomRouterLink = forwardRef((props, ref) => (
  <React.Fragment ref={ref}>
    <NavLink {...props} />
  </React.Fragment>
));

const SidebarNavListItem = (props) => {
  const {
    title,
    href,
    depth = 0,
    children,
    icon: Icon,
    badge,
    open: openProp = false,
  } = props;

  const [open, setOpen] = React.useState(openProp);

  const handleToggle = () => {
    setOpen((state) => !state);
  };

  if (children) {
    return (
      <li className={`sidebar-item ${open ? "active" : ""}`}>
        <a
          className={`sidebar-link ${open ? "" : "collapsed"}`}
          data-bs-toggle="collapse"
          aria-expanded={open ? "true" : "false"}
          depth={depth}
          onClick={handleToggle}
        >
          {Icon && <Icon className="feather align-middle" />}{" "}
          <span className="align-middle" depth={depth}>
            {title}
          </span>
          {badge && (
            <Badge className="badge-sidebar-primary" bg="" size={18}>
              {badge}
            </Badge>
          )}
          {open ? <div /> : <div />}
        </a>
        <Collapse in={open}>
          <ul className="sidebar-dropdown list-unstyled">{children}</ul>
        </Collapse>
      </li>
    );
  }

  return (
    <li className="sidebar-item">
      <CustomRouterLink
        depth={depth}
        to={href}
        activeclassname="active"
        className="sidebar-link"
      >
        {Icon && <Icon className="feather align-middle" />}{" "}
        <span className="align-middle" depth={depth}>
          {title}
        </span>
        {badge && (
          <Badge className="badge-sidebar-primary" bg="" size={18}>
            {badge}
          </Badge>
        )}
      </CustomRouterLink>
    </li>
  );
};

export default SidebarNavListItem;
