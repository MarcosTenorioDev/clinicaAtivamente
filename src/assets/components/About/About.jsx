import '../../components/About/About.css'
import cliente1 from '../../images/cliente1.webp'

const About = () =>{
    return(
        <div id="about">
            <div className='aboutBoxTitle'>
            <p className='lineOne'></p>
            <h1 className='titleAbout'>Quem somos?</h1>
            <p className='lineTwo'></p>
            </div>

            <div className="aboutSpace"></div>

            <div className="aboutContent">
                <div className="aboutContentLeft">
                    <img src={cliente1} alt="Imagem" />
                    <p>Cleyson Batista Monteiro</p>
                    <p>Crp:</p>
                </div>
                <div className="aboutContentRigth">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nisi minus ipsam sunt culpa amet nihil enim, velit optio deserunt repudiandae laudantium, cupiditate cum nulla magni nobis architecto? Est, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;