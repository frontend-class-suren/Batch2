import React from 'react'
import { Link, Outlet } from 'react-router-dom'

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