import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><a href="/#inicio">Inicio</a></li>
        <li><a href="#features">Planes</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav
