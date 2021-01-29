import {useState} from 'react'
import MenuSettings from './menu-settings'
import Icon from './icon-app'
import '../css/header.css'

const Header = ({ title }) => {

   const [showMenuSettings, setShowMenuSettings] = useState(false)

  const onClick = () => {
    setShowMenuSettings(!showMenuSettings)
  }

  return (
    <div className='contenedor'>
      <h4>{title}</h4>
      <Icon color='#25677b' onClick={onClick}/>
      {showMenuSettings && <MenuSettings />}
    </div>
  )
}

export default Header

