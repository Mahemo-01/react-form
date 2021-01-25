import '../css/tarjeta.css'

function Card({ children }) {
  return (
    <div className="card p-3" id="card-form">
      {children}
    </div>
  )
}

export default Card