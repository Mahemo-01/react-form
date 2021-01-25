import { useState } from 'react'

import Card from "./componentes/tarjeta";
import Circulo from './componentes/circulo'
import Formulario from "./componentes/formulario";
import RuedaColor from "./componentes/rueda-color";
import './App.css';
import './globals.css';


function App() {

  const [contador, setValue] = useState(0)
  const [nombre, setNombre] = useState('sin Nombre')

  function sumarUno() {
    setValue(contador + 1)
  }

  return (
    <>
      <Card>
        <Circulo />
        <Circulo />
        <p>You clicked {contador} veces</p>
        <button className='btn-blue' onClick={sumarUno}>
          Click me
      </button>
        <button className='btn-blue' onClick={() => setNombre("angel hernandez")}>
          {nombre}
        </button>
        <Formulario />
        <RuedaColor />
      </Card>
    </>
  )
}

export default App;