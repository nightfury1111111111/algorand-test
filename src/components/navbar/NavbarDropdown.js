import React from "react";

import { Dropdown, ListGroup } from "react-bootstrap";

const NavbarDropdown = ({
  children,
  count,
  showBadge,
  header,
  footer,
  icon: Icon,
}) => (
  <Dropdown className="me-2 nav-item" align="end">
    <Dropdown.Toggle as="a" className="nav-link nav-icon dropdown-toggle">
      <div className="position-relative">
        <Icon className="align-middle" size={18} />
        {showBadge ? <span className="indicator">{count}</span> : null}
      </div>
    </Dropdown.Toggle>
    <Dropdown.Menu drop="end" className="dropdown-menu-lg py-0">
      <div className="dropdown-menu-header position-relative">
        {count} {header}
      </div>
      <ListGroup>{children}</ListGroup>
      <Dropdown.Header className="dropdown-menu-footer">
        <span className="text-muted">{footer}</span>
      </Dropdown.Header>
    </Dropdown.Menu>
  </Dropdown>
);

export default NavbarDropdown;
