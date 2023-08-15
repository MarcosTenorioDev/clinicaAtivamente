import { useEffect, useLayoutEffect } from 'react'
import '../../components/About/About.css'
import cliente1 from '../../images/cliente1.webp'
import cliente2 from '../../images/cliente2.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import linkedin from '../../images/linkedin.webp'
import lattes from '../../images/lattes.webp'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
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
                    <div className="aboutContentLeft" data-aos="fade-up" >
                        <div className="imgContainer">
                            <img src={cliente1} alt="Imagem" />
                        </div>
                        <div className="textContainer">
                            <p className='oi'>Cleyson Batista Monteiro</p>
                            <p className='oi'>Crp: 02/13.171</p>
                            <div className="socialContainer">
                                <div className="linkedin">
                                    <a href='https://www.linkedin.com/in/cleyson-monteiro-651a749b/?originalSubdomain=br' target='_blank'><img src={linkedin} alt="linkedin" /></a>
                                </div>
                                <div className="lattes">
                                   <a href=' http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4234793E1&tokenCaptchar=03AGdBq27vz56TRCosL0CcxqeGmqJl197frFu543lo4wYjutnNyO3amnWMYN1fjsvHWpHWmFh-TJiV96fSvuox9GtFytUhAPjfJYJgO1RNQZDq7XFMtIub8Tsuf_vacQAdmxQ10ocUDC4wfYxPjRlH05n6qD3cWTgtck6BRRAyS1f3Qb7LZ_CGB6PIh4RqgJGr2u0Ap1n0-DGaqFtDpv_r_en6xg9RjIIh55we1W8LotPXR9pG7dhZ7oBksIOyFh28BJ8OtM4iIw4fFl0wjIZB8s92N933UXyfMGvcH3ODn9zMMREldIfb0dE0YdgNufCqtWCjfnm5oXnYIH9sHupa2kmwfU3v0P1GS0Fs9Mi9nhdCAKfZPz70e7NApzRgWHZ9exSybDt7ASFKgTUuyVUr1yXMnKMiH0JrieVMh7mu-EGEhXH21k-Ycz-3X4lgzvTwMt3qnIrLjNHvjWpj-ApU9z6Z2Pmv7Cn2OQ' target='_blank'> <img src={lattes} alt="lattes" /></a>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="aboutContentRigth" data-aos="fade-up">
                        <p>Sou Graduado em PSICOLOGIA, com especialização em Psicologia Clinica pela Universidade Católica de Pernambuco (2006). MBA em Planejamento e Gestão Organizacional pela FCAP-UPE (2008). Professor bolsista Capes do programa de EAD-UAB (Universidade Aberta do Brasil) da UFRPE (Universidade Federal Rural de PE), participei de video aula no curso de Bacharelado em Administração Pública e ainda ministrei aulas nos pólos de Surubim, Carpina e no campus da UFRPE. Outra experiência relevante em EAD foi a participação como professor tutor no curso de Técnico em Administração nas disciplinas de Estoques, Gestão de Pessoas e Treinamento e Desenvolvimento pela SEEP - SEE/PE. Atuei também como professor da APESU - ASSOCIAÇÂO PERNAMBUCANA DE ENSINO SUPERIOR, onde exerci por 3 anos (2007 a 2009) a função de coordenador Acadêmico/Pedagógico e professor, ministrei diversas disciplinas como Psicologia Organizacional, Gestão de Pessoas 1 e 2, Treinamento e desenvolvimento, Marketing Internacional entre outras. Experiência em ensino de Pós Graduação pela IEP (Instituto Educacional de Pernambuco) onde atuei nos anos de 2011 e 2012. Professor na Uninabuco - Universidade Joaquim Nabuco no curso de Administração, Gestão de Recursos Humanos e Gestão Logistica onde ministrei disciplinas como Organização, Sistemas e Métodos, Psicologia do Comportamento Organizacional, Gestão de projetos, Gestão e Controle de Produção entre outras. Coordenador de Pós Graduação em Psicologia Organizacional e do Trabalho na Uninassau - Campos Olinda Atualmente sou professor Titular e NDE do departamento de Psicologia da Uninassau campos Paulista, ainda ministro aulas nos cursos de Administração, Logistica, Contabilidade e Estética & Cosmético.
                        </p>
                    </div>
                </div>


                <div className="aboutSpaceTwo"></div>

                <div className="boxContentRigth">
                    <div className="aboutContentLeft" data-aos="fade-up">
                        <div className="imgContainer">
                            <img className='imgCliente' src={cliente2} alt="Imagem" />
                        </div>
                        <div className="textContainer">
                            <p className='oi2'>Marcia Karine Costa</p>
                            <p className='oi2'>Crp: 02/12346</p>
                            <div className="socialContainer">
                                <div className="linkedin">
                                    <a href='https://www.linkedin.com/in/marcia-karine-costa-7a689b38/?originalSubdomain=br'><img src={linkedin} alt="linkedin" /></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="aboutContentRight" data-aos="fade-up">
                        <p>Conheça a Dra. Márcia Karine, uma psicóloga excepcional que encanta seus pacientes com sua abordagem centrada na pessoa, é responsável e envolvente. Com 19 anos de experiência em Psicologia, é Neuropsicopedagoga, ela ainda domina a arte de criar consultas divertidas e interativas, com o público infantil. Para os adolescentes torna cada sessão única e enriquecedora. Nos atendimentos com os Adultos, a escuta e o acolhimento promovem momentos de crescimento e valorização a pessoa. Sua dedicação à profissão reflete-se em sua capacidade de ouvir atentamente, compreendendo as necessidades individuais de cada pessoa que busca seu auxílio. Ela constrói uma relação de confiança com seus pacientes, oferecendo um espaço seguro e acolhedor para expressar seus sentimentos e desafios. O sigilo é um valor inegociável para a Dra. Márcia. Ela trata todas as informações compartilhadas durante as sessões com o mais alto nível de confidencialidade, garantindo que seus pacientes se sintam confortáveis e protegidos ao compartilhar suas histórias mais íntimas. Além de ser uma profissional exemplar, a Dra. Márcia é reconhecida por sua empatia e sensibilidade para lidar com questões emocionais complexas, além dos atendimentos clínicos, Ela é colunista na Rádio Nova Brasil FM, onde todas as quartas apresenta o quadro Respire e Pense – no programa Mesa Pra 2. Entre um atendimento e outro ainda exerce o cargo de Coordenadora dos Cursos de Psicologia e Pedagogia da Uninassau Paulista. A Dra. Márcia Karine se dedica ainda a trabalhos com crianças autistas, para aumentar seus conhecimentos tem cursos em ABA e TEACCH.</p>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default About;