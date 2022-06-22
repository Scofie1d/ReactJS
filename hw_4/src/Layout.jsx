import React from 'react';
import HomeHeader from "./customizer/HomeHeader";
import CustomLink from "./customizer/CustomLink";
import {NavLink, Outlet} from "react-router-dom";
import Footer from "./customizer/Footer";

const Layout = () => {
    return (
      <>
      <HomeHeader>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/profile'>Profile</CustomLink>
          <CustomLink to='/chat'>Chat</CustomLink>
      </HomeHeader>
          <main>
              <Outlet/>
          </main>
          <Footer></Footer>
      </>
    );
};

export default Layout;