import { useEffect, useLayoutEffect } from 'react'
import '../../components/About/About.css'
import cliente1 from '../../images/cliente1.webp'
import cliente2 from '../../images/cliente2.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    }, []);

    
    return (
        <div id="aboutContainer">
            <div className='aboutBoxTitle'>
                <p className='line'></p>
                <h1 className='titleAbout'>Quem somos?</h1>
                <p className='line'></p>
            </div>

            <div className="aboutSpace"></div>

            <div className="aboutContent">
                <div className="boxContentLeft">
                    <div className="aboutContentLeft"  data-aos="fade-up" >
                        <div className="imgContainer">
                            <img src={cliente1} alt="Imagem" />
                        </div>
                        <div className="textContainer">
                            <p className='oi'>Cleyson Batista Monteiro</p>
                            <p className='oi'>Crp: xxxx-xxx</p>
                        </div>
                    </div>
                    <div className="aboutContentRigth"  data-aos="fade-up">
                        <p>O Dr. Cleyson Monteiro é um profissional de psicologia altamente respeitado e dedicado, cujo trabalho tem        transformado positivamente a vida de muitas pessoas. Sua abordagem terapêutica é baseada em valores como empatia genuína, compreensão profunda e um olhar atento às necessidades emocionais individuais de cada paciente.

                            Com uma personalidade acolhedora e descontraída, o Dr. Cleyson cria um ambiente seguro e confidencial em suas sessões, o que permite que seus pacientes se sintam à vontade para expressar seus pensamentos e sentimentos mais íntimos sem julgamentos. Essa conexão e respeito mútuo entre ele e seus pacientes são fundamentais para o progresso emocional e a transformação positiva que ocorre em seu consultório.
                            Além disso, o Dr. Cleyson continua a aprimorar suas habilidades profissionais e se manter atualizado com as últimas pesquisas e avanços na área da psicologia.

                        </p>
                    </div>
                </div>


                <div className="aboutSpaceTwo"></div>

                <div className="boxContentRigth">
                    <div className="aboutContentLeft"  data-aos="fade-up">
                        <div className="imgContainer">
                            <img className='imgCliente' src={cliente2} alt="Imagem" />
                        </div>
                        <div className="textContainer">
                            <p>Marcia Karine Costa</p>
                            <p>Crp: 02/12346</p>
                        </div>
                    </div>
                    <div className="aboutContentRight"  data-aos="fade-up">
                        <p>Conheça a Dra. Márcia Karine, uma psicóloga excepcional que encanta seus pacientes com sua abordagem centrada na pessoa, é responsável e envolvente. Com 19 anos de experiência em Psicologia, é Neuropsicopedagoga, ela ainda domina a arte de criar consultas divertidas e interativas, com o público infantil. Para os adolescentes torna cada sessão única e enriquecedora. Nos atendimentos com os Adultos, a escuta e o acolhimento promovem momentos de crescimento e valorização a pessoa. Sua dedicação à profissão reflete-se em sua capacidade de ouvir atentamente, compreendendo as necessidades individuais de cada pessoa que busca seu auxílio. Ela constrói uma relação de confiança com seus pacientes, oferecendo um espaço seguro e acolhedor para expressar seus sentimentos e desafios. O sigilo é um valor inegociável para a Dra. Márcia. Ela trata todas as informações compartilhadas durante as sessões com o mais alto nível de confidencialidade, garantindo que seus pacientes se sintam confortáveis e protegidos ao compartilhar suas histórias mais íntimas. Além de ser uma profissional exemplar, a Dra. Márcia é reconhecida por sua empatia e sensibilidade para lidar com questões emocionais complexas, além dos atendimentos clínicos, Ela é colunista na Rádio Nova Brasil FM, onde todas as quartas apresenta o quadro Respire e Pense – no programa Mesa Pra 2. Entre um atendimento e outro ainda exerce o cargo de Coordenadora dos Cursos de Psicologia e Pedagogia da Uninassau Paulista. A Dra. Márcia Karine se dedica ainda a trabalhos com crianças autistas, para aumentar seus conhecimentos tem cursos em ABA e TEACCH.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About;