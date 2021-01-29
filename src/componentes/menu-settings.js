import ListOption from './list-option'
import '../css/menu-settings.css'


function MenuSettings() {
  const settingName = 'Dark Mode'

  return (
    <div className='menu'>
      <ul>
        <ListOption settingName={settingName} />
        <ListOption settingName={settingName} />
        <ListOption settingName={settingName} />
      </ul>
    </div >
  )
}

export default MenuSettings