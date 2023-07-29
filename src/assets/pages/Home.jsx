import NavBar from '../components/NavBar/NavBar'
import './homePage.css'
import '../../global.css'

const Home = () => {
    return(
        <div id='homePage'>
            <div className='content'>
                <header className='header'>
                    <NavBar />
                    {/* aqui vem o componente Introduction */}
                </header>

                <section className='about'>
                    {/* Componente About */}
                </section>

                <section className='aboutWork'>
                    {/* Componente AboutWork - Como trabalhamos */}
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