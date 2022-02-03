import React from "react";
import { Outlet } from "react-router-dom";

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/Main";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Settings from "../components/Settings";

import dashboardItems from "../components/sidebar/dashboardItems";

const Dashboard = ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <Sidebar items={dashboardItems} />
      <Main>
        <Navbar />
        <Content>
          {children}
          <Outlet />
        </Content>
        <Footer />
      </Main>
    </Wrapper>
    <Settings />
  </React.Fragment>
);

export default Dashboard;
