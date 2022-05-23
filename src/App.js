import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/Home";

import "./assets/styles/reset.css";
import "./assets/styles/colors.css";
import "./assets/styles/app.css";

// import { menus } from "./static-menus";

export default function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}
