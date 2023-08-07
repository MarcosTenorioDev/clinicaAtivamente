import React, { useState } from 'react';
import logo from '../../images/logoVetor.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../components/NavBar/NavBar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [active, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!active);
  };

  return (
    <div id="navBar">
      <div className="logo">
        <img src={logo} alt="logo da Clinica Ativamente" height={35} />
      </div>
      <div className={`navLinks ${active ? 'active' : ''}`} id="navLinksUl">
        <Link to="header" smooth={true} duration={500} onClick={toggleMode}>
          <li className="navLinksLi">Home</li>
        </Link>
        <Link to="quemSomos" smooth={true} duration={500} onClick={toggleMode}>
          <li className="navLinksLi">Quem Somos</li>
        </Link>
        <Link to="comoTrabalhamos" smooth={true} duration={500} onClick={toggleMode}>
          <li className="navLinksLi">Como Trabalhamos</li>
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMode}>
          <li className="navLinksLi">Contato</li>
        </Link>
      </div>
      <div id="menu" onClick={toggleMode}>
        <i>{active ? <FaTimes /> : <FaBars />}</i>
      </div>
    </div>
  );
};

export default NavBar;
