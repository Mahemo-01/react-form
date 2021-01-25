import Boton from './boton'
import '../css/formulario.css'

function Formulario() {
  return (
    <form>
      <div className="form-group">
        <div className="box"><span><i className="far fa-user-circle"></i></span></div>
      </div>
      <div className="form-group mt-1">
        <input className="form-control" id="username" type="text" placeholder="Username:" />
      </div>
      <div className="form-group mt-1">
        <input className="form-control" id="email" type="email" placeholder="Email:" />
      </div>
      <div className="form-group mt-1">
        <input className="form-control" id="password" type="password" placeholder="Password:" />
      </div>
      <Boton />
    </form>
  )
}

export default Formulario