import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav
