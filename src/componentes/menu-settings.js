import ListOption from './list-option'
import '../css/menu-settings.css'


function MenuSettings({showMenuSettings}) {
  const text = 'Dark Mode setting'
  const claseActiva=showMenuSettings ? 'inactive':'active'


  return (
    <div className={`menu ${claseActiva}`}>
      <ul>
        <ListOption settingName={text} />
        <ListOption settingName={text} />
        <ListOption settingName={text} />
      </ul>
    </div >
  )
}

export default MenuSettings