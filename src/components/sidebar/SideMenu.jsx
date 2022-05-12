import SideSubs from "./SideSubs";

export default function SideMenu(props) {
  return (
    <div className="sideMenu">
      {props.menu.name}
      {props.menu.submenus
        ? props.menu.submenus.map((subs, key) => 
            <SideSubs key={subs.key} subs={subs} />
          )
        : ""}
    </div>
  );
}
