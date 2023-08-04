import '../FloatIcon/FloatIcon.css'
import wpp from '../../images/wpp.svg'

const FloatIcon = () =>{
    return(
      <div className="floating-icon">
        <a
          className="floating-icon__whatsapp pulse-whatsapp"
          href="https://wa.me/5581999157176"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp"><img src={wpp} alt="botão flutuante para enviar mensagem no whatsapp"/></i>
        </a>
      </div>
    )
}

export default FloatIcon;