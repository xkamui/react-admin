import "./topbar.css";
import TopNotif from "./TopNotif";
import TopUser from "./TopUser";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topLogo">React-Admin</div>
      <div className="topNotifs">
        <TopNotif name="Front office" icon={<HomeIcon />} />
        <TopNotif name="Messages" notif="3" icon={<ChatBubbleOutlineIcon />} />
        <TopNotif name="Version" notif icon={<InfoIcon />} />
        <TopUser />
        <TopNotif name="Logout" icon={<LogoutIcon />} />
      </div>
    </div>
  );
}
