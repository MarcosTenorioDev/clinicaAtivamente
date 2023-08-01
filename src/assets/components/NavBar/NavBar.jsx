import React, { useState } from 'react';
import logo from '../../images/logo.webp';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../components/NavBar/NavBar.css';

const NavBar = () => {
    const [active, setMode] = useState(false);

    const toggleMode = () => {
        setMode(!active);
    };

    return (
        <div id="navBar">
            <div className="logo">
                <img src={logo} alt="logo da Clinica Ativamente" height={40} />
            </div>
            <div className={`navLinks ${active ? 'active' : ''}`} id="navLinksUl">
                <a href="#">
                    <li className="navLinksLi">Home</li>
                </a>
                <a href="#">
                    <li className="navLinksLi">Quem Somos</li>
                </a>
                <a href="#">
                    <li className="navLinksLi">Como Trabalhamos</li>
                </a>
                <a href="#">
                    <li className="navLinksLi">Contato</li>
                </a>
            </div>
            <div id="menu" onClick={toggleMode}>
                <i>{active ? <FaTimes /> : <FaBars />}</i>
            </div>
        </div>
    );
};

export default NavBar;
