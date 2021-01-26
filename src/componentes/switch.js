
import { useState } from 'react'

function Switch () {

  const [enabled, setEnabled] = useState(false)
  const classActive = enabled ? 'darkMode' : 'darkMode active'

  function handleChange () {
    setEnabled(!enabled)
    document.body.classList.toggle("is-dark-mode")
  }

  return (
    <div className={classActive} id="darkMode" onClick={handleChange}
      ></div>
  )
}

export default Switch