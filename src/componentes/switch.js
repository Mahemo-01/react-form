import { useState } from 'react'
import '../css/switch.css'

function Switch () {

  const [enabled, setEnabled] = useState(false)
  const classActive = enabled ? 'active' : 'inactive'

  function handleChange () {
    setEnabled(!enabled)
    document.body.classList.toggle("is-dark-mode")
  }

  return (
    <div className={`darkMode ${classActive}`} id="darkMode" onClick={handleChange}
      ></div>
  )
}

export default Switch