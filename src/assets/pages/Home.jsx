import NavBar from '../components/NavBar/NavBar'
import About from '../components/About/About'
import AboutWork from '../components/AboutWork/AboutWork'
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
                    {/* OurService - características do nosso atendimento */}
                    {/* Operation - principais atuações */}
                </section>

                <section className='section' id='contact'>
                    {/* Contact - Entre em contato */}
                </section>
            
            
        </div>
        
            
    )
}

export default Home;