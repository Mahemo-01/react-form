
import { useState } from 'react'
import '../css/menu-settings.css'
import ListOption from './list-option'


function MenuSettings() {
  const settingName = 'Dark Mode'

  return (
    <div className>
      <ul>
        <ListOption settingName={settingName} />
        <ListOption settingName={settingName} />
        <ListOption settingName={settingName} />
      </ul>
    </div >
  )
}

export default MenuSettings