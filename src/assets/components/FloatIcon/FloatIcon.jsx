import '../FloatIcon/FloatIcon.css'
import wpp from '../../images/wpp.svg'

const FloatIcon = () =>{
    return(
      <div className="floating-icon">
        <a
          className="floating-icon__whatsapp pulse-whatsapp"
          href="https://api.whatsapp.com/send?phone=558196635917&text=Eu%20gostaria%20de%20agendar%20uma%20sess%C3%A3o!"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp"><img src={wpp} alt="botão flutuante para enviar mensagem no whatsapp"/></i>
        </a>
      </div>
    )
}

export default FloatIcon;