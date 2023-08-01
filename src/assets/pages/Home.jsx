import NavBar from '../components/NavBar/NavBar'
import About from '../components/About/About'
import AboutWork from '../components/AboutWork/AboutWork'
import OurService from '../components/OurService/OurService'
import Operation from '../components/Operation/Operation'
import Contact from '../components/Contact/Contact'
import Forms from '../components/Forms/Forms'

import './homePage.css'
import '../../global.css'
import Introduction from '../components/Introduction/Introduction'


const Home = () => {
    return(
        <div id='homePage'>
                <header className='section' id='header'>
                    <NavBar />
                    <Introduction/>
                </header>
                <div className='backgroundAbout'>
                    <section className='section' id='about'>
                        <About />
                    </section> 
                </div>
               

                <section className='section' id='aboutWork'>
                    <AboutWork />
                    <OurService />
                    <Operation />
                </section>

                <section className='section' id='contact'>
                    <Contact />
                    <Forms />
                </section>
            
            
        </div>
        
            
    )
}

export default Home;