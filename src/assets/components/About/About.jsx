import '../../components/About/About.css'
import cliente1 from '../../images/cliente1.webp'
import cliente2 from '../../images/cliente2.webp'

const About = () => {
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
                    <div className="aboutContentLeft">
                        <div className="imgContainer">
                            <img src={cliente1} alt="Imagem" />
                        </div>
                        <div className="textContainer">
                            <p className='oi'>Cleyson Batista Monteiro</p>
                            <p className='oi'>Crp: xxxx-xxx</p>
                        </div>


                    </div>
                    <div className="aboutContentRigth">
                        <p>O Dr. Cleyson Monteiro é um profissional de psicologia altamente respeitado e dedicado, cujo trabalho tem        transformado positivamente a vida de muitas pessoas. Sua abordagem terapêutica é baseada em valores como empatia genuína, compreensão profunda e um olhar atento às necessidades emocionais individuais de cada paciente.

                            Com uma personalidade acolhedora e descontraída, o Dr. Cleyson cria um ambiente seguro e confidencial em suas sessões, o que permite que seus pacientes se sintam à vontade para expressar seus pensamentos e sentimentos mais íntimos sem julgamentos. Essa conexão e respeito mútuo entre ele e seus pacientes são fundamentais para o progresso emocional e a transformação positiva que ocorre em seu consultório.
                            Além disso, o Dr. Cleyson continua a aprimorar suas habilidades profissionais e se manter atualizado com as últimas pesquisas e avanços na área da psicologia.

                        </p>
                    </div>
                </div>


                <div className="aboutSpaceTwo"></div>

                <div className="boxContentRigth">
                    <div className="aboutContentLeft">
                        <div className="imgContainer">
                            <img className='imgCliente' src={cliente2} alt="Imagem" />
                        </div>
                        <div className="textContainer">
                            <p>Marcia Karine Costa</p>
                            <p>Crp: xxxx-xxx</p>
                        </div>
                    </div>
                    <div className="aboutContentRight">
                        <p>Conheça a Dra. Márcia, uma psicóloga excepcional que encanta seus pacientes com sua abordagem responsável e envolvente. Com anos de experiência, ela domina a arte de criar consultas divertidas e interativas, tornando cada sessão única e enriquecedora.

                            Sua dedicação à profissão reflete-se em sua capacidade de ouvir atentamente, compreendendo as necessidades individuais de cada pessoa que busca seu auxílio. Ela constrói uma relação de confiança com seus pacientes, oferecendo um espaço seguro e acolhedor para expressar seus sentimentos e desafios.

                            O sigilo é um valor inegociável para a Dra. Márcia. Ela trata todas as informações compartilhadas durante as sessões com o mais alto nível de confidencialidade, garantindo que seus pacientes se sintam confortáveis e protegidos ao compartilhar suas histórias mais íntimas.

                            Além de ser uma profissional exemplar, a Dra. Márcia é reconhecida por sua empatia e sensibilidade para lidar com questões emocionais complexas.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About;