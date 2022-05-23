import React from "react";
import axios from "axios";
import SideMenu from "./SideMenu";
import "./sidebar.css";

import { apiBaseUrl } from "../../config";

export default function Sidebar() {
  const urlAPI = apiBaseUrl + "adminMenu/list?display=1";
  const [menus, setMenus] = React.useState("");
  
  const getMenus = async () => {
    const response = await axios.get(urlAPI);
    const datas = await response.data;
    setMenus(datas);
    console.log(datas)
  }

  React.useEffect(() => {
    if (menus === '') {
        getMenus();
    }
  }, []);

  return (
    <div className="sidebar">
      {(menus !== '' ? menus.map((menu, key) => (
        <SideMenu key={menu.id} menu={menu} />
      )) : '…')}
    </div>
  );
}
