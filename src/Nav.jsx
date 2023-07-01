import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
