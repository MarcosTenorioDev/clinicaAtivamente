import '../../components/Introduction/Introduction.css'
import Cliente1 from '../../images/Img_Introduction.webp'
import logoVetor from '../../images/logoVetor.svg'

const Introduction = () => {
    return (
        <div className='Container'>
            <div className='Subcontainer'>
                <div className='Logo_box'>
                    <div className='Logo_box2'>
                        <div className='Logo_box3'>
                            <div className='Text_logo'>
                                <h3>NÚCLEO MULTIDISCIPLINAR</h3>
                            </div>
                        </div>
                        <img src={logoVetor} alt="" height={150} />
                    </div>
                    <div className='Text_logo2'>
                        <div className='Text_1'>
                            <h2>ESPAÇO</h2>
                        </div>
                        <div className='Text_2'>
                            <h2 >ATIVAMENTE</h2>
                        </div>
                    </div>
                    <div className='Text_logo3'>
                    <h3>ATIVE SUA VIDA POSITIVE SUA MENTE</h3>
                    </div>
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
                    <img src={Cliente1} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Introduction;