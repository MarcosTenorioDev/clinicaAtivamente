import logo from '../../images/logo.webp'
import '../../components/NavBar/NavBar.css'

const NavBar = () =>{
    return(
        <div id="navBar">
           <div className="logo">
                <img src={logo} alt="logo da Clinica Ativamente" height={40}/>
           </div>
            <div className="navLinks">
                <ul className='navLinksUl'>
                    <a href="#"><li className='navLinksLi'>Home</li></a>
                    <a href="#"><li className='navLinksLi'>Quem Somos</li></a>
                    <a href="#"><li className='navLinksLi'>Como Trabalhamos</li></a>
                    <a href="#"><li className='navLinksLi'>Contato</li></a>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;