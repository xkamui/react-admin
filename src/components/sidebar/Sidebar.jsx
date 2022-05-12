import './sidebar.css'
import SideMenu from './SideMenu'

import {menus} from '../../static-menus'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      {menus.map((menu, key) => <SideMenu key={menu.key} menu={menu} />)}
    </div>
  )
}
