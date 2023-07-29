import NavBar from '../components/NavBar/NavBar'
import About from '../components/About/About'
import AboutWork from '../components/AboutWork/AboutWork'
import './homePage.css'
import '../../global.css'
import Introduction from '../components/Introduction/Introduction'


const Home = () => {
    return(
        <div id='homePage'>
            <div className='content'>
                <header className='header'>
                    <NavBar />
                    <Introduction/>
                </header>

                <section className='about'>
                    <About />
                </section> 

                <section className='aboutWork'>
                    <AboutWork />
                    {/* OurService - características do nosso atendimento */}
                    {/* Operation - principais atuações */}
                </section>

                <section className='contact'>
                    {/* Contact - Entre em contato */}
                </section>

            </div>
            
            
        </div>
        
            
    )
}

export default Home;