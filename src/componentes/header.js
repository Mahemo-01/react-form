import { useState } from 'react'
import MenuSettings from './menu-settings'
import Icon from './icon-app'

const Header = ({ title }) => {
  const [toggleClose, settoggleClose]=useState(false)

  const handleClick = () => {
    console.log('se hizo click')
    settoggleClose(true)
  }

  return (
    <>
      <h4>{title}</h4>
      <Icon color='#25677b' />
      <MenuSettings />
    </>
  )
}

export default Header

