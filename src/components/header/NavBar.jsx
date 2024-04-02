import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/">Products</Link>
        </li>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
