
import '../css/menu-settings.css'
import Boton from './boton'
import ListOption from './list-option'
import Switch from './switch'

function MenuSettings() {
  const settingName = 'Dark Mode'

  const handleClick = (e) => {
    const sibling = e.target.parentNode.nextElementSibling.style
    sibling.opacity = '1'
    sibling.transform = 'translateY(0px)'
    sibling.transition = '.5s ease-in'
  }


  return (
    <div className='box-settings'>
      <span onClick={handleClick}><i className="fas fa-cog"></i></span>
      <ul className='menu p-1'>
        <ListOption settingName={settingName} />
        <li>Configuration</li>
      </ul>
    </div>
  )
}

export default MenuSettings