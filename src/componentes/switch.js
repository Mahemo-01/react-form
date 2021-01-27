import { useState, useEffect } from 'react'
import '../css/switch.css'

function Switch() {

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const [enabled, setEnabled] = useState(mql.matches ? true : false)
  const classActive = enabled ? 'active' : 'inactive'

  mql.addEventListener("change", (e) => {
    if (e.matches) {
      document.body.classList.add('is-dark-mode')
      setEnabled(true)
    }
    else {
      document.body.classList.remove('is-dark-mode')
      setEnabled(false)
    }
  })

  useEffect(() => {
    if (mql.matches) { document.body.classList.add('is-dark-mode') }
  }, [mql.matches])

  function handleChange(e) {
    setEnabled(!enabled)
    document.body.classList.toggle("is-dark-mode")
  }

  return (
    <div className={`darkMode ${classActive}`} id="darkMode" onClick={handleChange}
    ></div>
  )
}

export default Switch