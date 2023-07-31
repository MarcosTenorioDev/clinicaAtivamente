import './OurService.css'
import atendimentoSvg from '../../images/atendimentoPersonalizado.svg'
import confiancaSvg from '../../images/emblema-escudo.svg'
import coracaoSvg from '../../images/coracao.svg'
import cerebro from '../../images/cerebro.svg'

const OurService = () =>{
    return(
        <div id="ourService">
            <h2 className='ourServiceTitle'>Principais características do nosso atendimento</h2>
            <div className='ourServiceTagContainer'>
                <div className='tagTwoBox'>
                    <div className='ourServiceTag'>
                    <div className='ourServiceImgBg'>
                        <i className='ourServiceIcon'><img src={atendimentoSvg} alt="" className="ourServiceImg"/></i>
                    </div>
                    <div className='ourServiceContentBox'>
                        <h3 className='ourServiceContentTitle'>Atendimento Personalizado</h3>
                        <p className='ourServiceContent'>xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx</p>
                    </div>
                    </div>
                    <div className='ourServiceTag'>
                        <div className='ourServiceImgBg'>
                            <i className='ourServiceIcon'><img src={coracaoSvg} alt="" className="ourServiceImg"/></i>
                        </div>
                        <div className='ourServiceContentBox'>
                            <h3 className='ourServiceContentTitle'>Cuidado e acolhimento</h3>
                            <p className='ourServiceContent'>xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx</p>
                        </div>
                    </div>
                </div>
                
                <div className='tagTwoBox'>
                    <div className='ourServiceTag'>
                    <div className='ourServiceImgBg'>
                        <i className='ourServiceIcon'><img src={confiancaSvg} alt="" className="ourServiceImg"/></i>
                    </div>
                    <div className='ourServiceContentBox'>
                        <h3 className='ourServiceContentTitle'>Confiança e sigilo</h3>
                        <p className='ourServiceContent'>xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx</p>
                    </div>
                </div>
                <div className='ourServiceTag'>
                    <div className='ourServiceImgBg'>
                        <i className='ourServiceIcon'><img src={cerebro} alt="" className="ourServiceImg"/></i>
                    </div>
                    <div className='ourServiceContentBox'>
                        <h3 className='ourServiceContentTitle'>Terapia-Cognitivo-Comportamental</h3>
                        <p className='ourServiceContent'>xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx</p>
                    </div>
                </div> 
                </div>
            </div>
            
        </div>
    )
}
export default OurService;  