import {useState} from 'react'
import MenuSettings from './menu-settings'
import Icon from './icon-app'
import '../css/header.css'

const Header = ({ title }) => {

  const [showMenuSettings, setShowMenuSettings] = useState(true)

  const onClick = () => {
    setShowMenuSettings(!showMenuSettings)
  }

  return (
    <div className='contenedor'>
      <h4>{title}</h4>
      <Icon color='#25677b' onClick={onClick}/>
      <MenuSettings showMenu={showMenuSettings} />
      {/* {showMenuSettings && <MenuSettings showMenu={showMenuSettings} />} */}
    </div>
  )
}

export default Header

