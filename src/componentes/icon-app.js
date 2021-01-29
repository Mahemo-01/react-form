const Icon = ({ color, onClick }) => {

  return (
    <span onClick={onClick} style={{ color: color }}><i className="fas fa-cog"></i></span>
  )
}

export default Icon