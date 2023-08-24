import NavBar from '../components/NavBar/NavBar'
import About from '../components/About/About'
import AboutWork from '../components/AboutWork/AboutWork'
import OurService from '../components/OurService/OurService'
import Operation from '../components/Operation/Operation'
import Contact from '../components/Contact/Contact'
import Forms from '../components/Forms/Forms'
import FloatIcon from '../components/FloatIcon/FloatIcon'

import './homePage.css'
import '../../global.css'
import Introduction from '../components/Introduction/Introduction'


const Home = () => {
    return (
        <div id='homePage'>
            <FloatIcon />
            <div className="backgroundNavbar">
                <NavBar />
            </div>

            <div className='backgroundSection'>
                <header className='section' id='header'>
                    <Introduction />
                </header>
            </div>
            <div className='backgroundAbout'>
                <section className='section' id='about'>
                    <section id='quemSomos'>
                        <About />
                    </section>
                </section>
            </div>

            <div className='backgroundSection'>
                <section className='section' id='aboutWork'>
                    <section id="comoTrabalhamos">
                        <AboutWork />
                    </section>
                    <OurService />
                    <Operation />
                </section>
            </div>


            <h2 className='contactTitle'>Entre em contato</h2>
            <section className='section' id='contact'>
                <Contact />
                <Forms />
            </section>



        </div>


    )
}

export default Home;