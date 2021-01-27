import Switch from "./switch";

function ListOption({ settingName }) {

  const handleClick = (e) => {
    e.target.parentNode.parentNode.style.transition = 'none'
  }

  return (
    <li onClick={handleClick}>
      <span>{settingName}</span>
      <Switch></Switch>
    </li>
  )
}

export default ListOption