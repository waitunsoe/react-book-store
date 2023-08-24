import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      {/*  dynamic router's  content*/}
      <div className="max-w-6xl mx-auto p-3 space-y-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
