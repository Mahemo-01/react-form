import Card from "./componentes/tarjeta";
import Circulo from './componentes/circulo'
import Formulario from "./componentes/formulario";
import RuedaColor from "./componentes/rueda-color";
import Switch from './componentes/switch';
import './App.css';
import './globals.css';


function App() {

  return (
    <>
      <Switch/>
      <Card>
        <Circulo />
        <Circulo />
        <Formulario />
        <RuedaColor />
      </Card>
    </>
  )
}

export default App;