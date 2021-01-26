
import '../css/menu-settings.css'
import ListOption from './list-option'

function MenuSettings() {
  return (
    <div className='box-settings'>
      <span>H</span>
      <ul className='menu p-1'>
        <ListOption />
        <li>Configuration</li>
      </ul>
    </div>
  )
}

export default MenuSettings