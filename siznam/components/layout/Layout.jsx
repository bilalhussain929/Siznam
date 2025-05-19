import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    // <div style={{ display: "flex" }}>
    //   <Sidebar />
    //   <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
    //     <Header />
    //     <main style={{ padding: "1rem", flex: 1 }}>
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "250px",
        }}
      >
        <Header />
        <main style={{ padding: "1rem", flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
