import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./style.css";
import useTheme from "../../hooks/useTheme";

const Layout = () => {
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("bg-slate-600");
    } else {
      body.classList.remove("bg-slate-600");
    }
  }, [isDark]);

  return (
    <div className={isDark ? "bg-slate-600" : "bg-white"}>
      <Navbar />
      {/*  dynamic router's  content*/}
      <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
          <div className="max-w-6xl mx-auto p-3 space-y-5">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Layout;
