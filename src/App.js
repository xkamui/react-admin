import React from 'react'
import { menus } from "./static-menus";

export default function App() {
  return (
    <div>
      admin panel
      {menus.map((menu) => {
        <span>menu.name</span>
      })}
    </div>
  )
}
