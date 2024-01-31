import React, { useState } from 'react'

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li><a href="/#inicio">Inicio</a></li>
        <li><a href="#features">Caracteristicas</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href='/planes'>Planes</a></li>
      </ul>
    </nav>
  )
}

export default Nav
