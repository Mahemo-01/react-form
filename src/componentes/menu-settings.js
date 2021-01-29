
import { useState } from 'react'
import '../css/menu-settings.css'
import ListOption from './list-option'


function MenuSettings() {
  const settingName = 'Dark Mode'
  const [closeWindow, setCloseWindow] = useState(true)
  const classCloseWindow = closeWindow ? 'inactive' : 'active'


  const handleClick = (e) => {
    setCloseWindow(!closeWindow)
  }


  return (
    <div className={`box-settings ${classCloseWindow}`} title='Settings'>
      <span onClick={handleClick}><i className="fas fa-cog"></i></span>
      <ul className={`menu p-1 ${classCloseWindow}`} >
        <ListOption settingName={settingName} />
        <ListOption settingName={settingName} />
        <ListOption settingName={settingName} />
      </ul>
    </div >
  )
}

export default MenuSettings