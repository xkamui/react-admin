import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function TopNotif(props) {
  return (
    <div className="topNotif">
      <Tooltip title={props.name}>
        <IconButton>{props.icon}</IconButton>
      </Tooltip>
      {props.notif ? <span className="number">{props.notif}</span> : ""}
    </div>
  );
}
