import React from "react";
import { Outlet } from "react-router-dom";

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/Main";
import NavbarSimple from "../components/navbar/NavbarSimple";
import Content from "../components/Content";
import Settings from "../components/Settings";

import docItems from "../components/sidebar/docItems";

const Doc = ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <Sidebar items={docItems} showFooter={false} />
      <Main>
        <NavbarSimple />
        <Content>
          {children}
          <Outlet />
        </Content>
      </Main>
    </Wrapper>
    <Settings />
  </React.Fragment>
);

export default Doc;
