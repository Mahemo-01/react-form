import Card from "./componentes/tarjeta";
import Circulo from './componentes/circulo'
import Formulario from "./componentes/formulario";
// import RuedaColor from "./componentes/rueda-color";
import MenuSettings from "./componentes/menu-settings";
import './App.css';
import './globals.css';

function App() {

  return (
    <>
      <MenuSettings />
      <Card>
        <Circulo />
        <Circulo />
        <Formulario />
        {/* <RuedaColor /> */}
      </Card>
    </>
  )
}

export default App;