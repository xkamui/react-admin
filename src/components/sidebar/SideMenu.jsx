import React from "react";
import SideSubs from "./SideSubs";

export default function SideMenu(props) {
  return (
    <div className="sideMenu">
      {props.menu.title}
      {props.menu.submenus
        ? props.menu.submenus.map((subs, key) => 
            <SideSubs key={subs.id} subs={subs} />
          )
  : ""}
    </div>
  );
}
