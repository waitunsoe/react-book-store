import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./style.css";

const Layout = () => {
  const location = useLocation();
  
  return (
    <>
      <Navbar />

      {/*  dynamic router's  content*/}
      <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
          <div className="max-w-6xl mx-auto p-3 space-y-5">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Layout;
