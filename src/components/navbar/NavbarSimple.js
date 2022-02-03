import React from "react";

import { Navbar } from "react-bootstrap";

import useSidebar from "../../hooks/useSidebar";

const NavbarComponent = () => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <Navbar variant="light" expand className="navbar-bg">
      <span
        className="sidebar-toggle d-flex"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i className="hamburger align-self-center" />
      </span>
    </Navbar>
  );
};

export default NavbarComponent;
