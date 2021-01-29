import ListOption from './list-option'
import '../css/menu-settings.css'


function MenuSettings ({ showMenu }) {
  const text = 'Dark Mode setting'
  const claseActiva=showMenu ? 'inactive':'active'

  return (
    <div className={`menu p-1 ${claseActiva}`}>
      <ul>
        <ListOption settingName={text} />
        <ListOption settingName={text} />
        <ListOption settingName={text} />
      </ul>
    </div >
  )
}

export default MenuSettings