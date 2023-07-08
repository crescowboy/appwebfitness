import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><a href="/#inicio">Inicio</a></li>
        <li><a href="#features">Caracteristicas</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href='/planes'>Planes</a></li>
      </ul>
    </nav>
  )
}

export default Nav
