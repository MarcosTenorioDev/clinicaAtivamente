import '../../components/About/About.css'
import cliente1 from '../../images/cliente1.webp'

const About = () => {
    return (
        <div id="about">
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
                        <p>Cleyson Batista Monteiro</p>
                        <p>Crp: xxxx-xxx</p>

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
                            <img src={cliente1} alt="Imagem" />
                        </div>
                        <p>Cleyson Batista Monteiro</p>
                        <p>Crp: xxxx-xxx</p>
                    </div>
                    <div className="aboutContentRight">
                        <p>O Dr. Cleyson Monteiro é um profissional de psicologia altamente respeitado e dedicado, cujo trabalho tem        transformado positivamente a vida de muitas pessoas. Sua abordagem terapêutica é baseada em valores como empatia genuína, compreensão profunda e um olhar atento às necessidades emocionais individuais de cada paciente.

                            Com uma personalidade acolhedora e descontraída, o Dr. Cleyson cria um ambiente seguro e confidencial em suas sessões, o que permite que seus pacientes se sintam à vontade para expressar seus pensamentos e sentimentos mais íntimos sem julgamentos. Essa conexão e respeito mútuo entre ele e seus pacientes são fundamentais para o progresso emocional e a transformação positiva que ocorre em seu consultório.
                            Além disso, o Dr. Cleyson continua a aprimorar suas habilidades profissionais e se manter atualizado com as últimas pesquisas e avanços na área da psicologia.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About;