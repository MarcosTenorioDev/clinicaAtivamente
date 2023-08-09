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
                            <p className='oi'>Crp: 02/13.171</p>
                        </div>
                    </div>
                    <div className="aboutContentRigth"  data-aos="fade-up">
                        <p>Praticante de esportes amadores, gosto de correr, surfar, fazer Jiu Jitsu e Cross fit, filho, esposo e pai de uma menina e um menino, sou Graduado em PSICOLOGIA, com especialização em Psicologia Clinica pela Universidade Católica de Pernambuco (2006). MBA em Planejamento e Gestão Organizacional pela FCAP-UPE (2008). Professor bolsista Capes do programa de EAD-UAB (Universidade Aberta do Brasil) da UFRPE (Universidade Federal Rural de PE), participei de video aula no curso de Bacharelado em Administração Pública e ainda ministrei aulas nos pólos de Surubim, Carpina e no campus da UFRPE. Outra experiência relevante em EAD foi a participação como professor tutor no curso de Técnico em Administração nas disciplinas de Estoques, Gestão de Pessoas e Treinamento e Desenvolvimento pela SEEP - SEE/PE. Atuei também como professor da APESU - ASSOCIAÇÂO PERNAMBUCANA DE ENSINO SUPERIOR, onde exerci por 3 anos (2007 a 2009) a função de coordenador Acadêmico/Pedagógico e professor, ministrei diversas disciplinas como Psicologia Organizacional, Gestão de Pessoas 1 e 2, Treinamento e desenvolvimento, Marketing Internacional entre outras. Experiência em ensino de Pós Graduação pela IEP (Instituto Educacional de Pernambuco) onde atuei nos anos de 2011 e 2012. Professor na Uninabuco - Universidade Joaquim Nabuco no curso de Administração, Gestão de Recursos Humanos e Gestão Logistica onde ministrei disciplinas como Organização, Sistemas e Métodos, Psicologia do Comportamento Organizacional, Gestão de projetos, Gestão e Controle de Produção entre outras. Coordenador de Pós Graduação em Psicologia Organizacional e do Trabalho na Uninassau - Campos Olinda Atualmente sou professor Titular e NDE do departamento de Psicologia da Uninassau campos Paulista, ainda ministro aulas nos cursos de Administração, Logistica, Contabilidade e Estética & Cosmético.
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
                            <p>Crp: xxxx-xxx</p>
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