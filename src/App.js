import {useState, useEffect} from 'react'
import Header from './componentes/header'
import './App.css';
import './globals.css';


function App () {

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const [enabled, setEnabled] = useState(mql.matches ? true : false)
  const classActive = enabled ? 'is-dark-mode' : null



   useEffect(() => {
    if (mql.matches) { document.body.classList.add(classActive) }
  }, [])


  return (
    <>
      <Header title={'hola'}/>
    </>
  )
}

export default App;