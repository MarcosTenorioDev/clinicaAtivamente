import Logo_Introduction from '../../images/logo_Introduction.webp'
import '../../components/Introduction/Introduction.css'
import Coroa from '../../images/Img_Introduction.webp'


const Introduction = () => {
    return (
        <div className='Container'>
            <div className='Subcontainer'>
                <div className='Logo'>
                    <img src={Logo_Introduction} alt="" />
                    <h3>Ative sua vida, positive sua mente</h3>
                </div>
                <div className="botoes">
                    <div className="btn_1">
                        <a href="#">Agende sua consulta</a>
                    </div>
                    <div className="btn_2">
                        <a href="#">Contato</a></div>
                </div>
            </div>

            <div className='Subcontainer_2'>
                <div>
                <img src={Coroa} alt=""/>
                </div>
                
            </div>
        </div>
    )
}

export default Introduction;