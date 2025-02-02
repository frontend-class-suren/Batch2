import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    
  </>
  )
}

export default Nav