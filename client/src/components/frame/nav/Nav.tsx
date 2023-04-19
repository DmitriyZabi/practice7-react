import { NavLink } from 'react-router-dom'
import './nav.scss'

export function Nav() {
  return (
    <nav>
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <NavLink to="/items" className="nav-item">
        Items
      </NavLink>
      <NavLink to="/modal" className="nav-item">
        Modal
      </NavLink>
      <NavLink to="/select" className="nav-item">
        Select
      </NavLink>
    </nav>
  )
}
