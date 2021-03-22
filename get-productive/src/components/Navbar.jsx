import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link className="navigation"to="/" style={{ textDecoration: 'none' }}><h1>Home</h1></Link>
    </nav>
  )
}

export default Navbar


