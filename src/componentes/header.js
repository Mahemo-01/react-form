import {useState} from 'react'
import MenuSettings from './menu-settings'
import Icon from './icon-app'

const Header = ({ title }) => {

   const [showMenuSettings, setShowMenuSettings] = useState(false)

  const onClick = () => {
    setShowMenuSettings(!showMenuSettings)
  }

  return (
    <>
      <h4>{title}</h4>
      <Icon color='#25677b' onClick={onClick}/>
      {showMenuSettings && <MenuSettings />}
    </>
  )
}

export default Header

