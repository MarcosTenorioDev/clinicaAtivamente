import logo from "../../images/logoVetor.svg";
import "../Contact/Contact.css";
import Icons from "../Icons/Icons";
import phone from "../../images/phone.svg";
import location from "../../images/location.svg";
import user from "../../images/user.svg";
import email from "../../images/email.svg";
import instagram from '../../images/instagram.svg'
import whatsapp from '../../images/whatsapp.svg'

const Contact = () => {
  return (
    <div id="contactDetails">
        <div className="contactDetailsLogo">
          <i>
            <img src={logo} alt="" className="contactLogo" />
          </i>
        </div>
        <div className="contactDetailsContent">
          <h3 className="contactDetailsTitle">Detalhes do contato</h3>
          <div className="contactIcons">
            <div className="contactTwoIconsBox">
              <Icons
                imgIcon={phone}
                title="Ligue para mim"
                desc="+55 (81) 99999-9999"
              />

              <Icons 
              imgIcon={email} 
              title="Email" 
              desc="Psicólogo@gmail.com" 
              />
            </div>
            <div className="contactTwoIconsBox">
              <Icons
                imgIcon={location}
                title="Localização"
                desc="Recife-Pe"
              />

              <Icons 
              imgIcon={user} 
              title="Redes Sociais" 
              descImg={instagram}
              descImg2={whatsapp}
              />
            </div>

          </div>
        </div> 
      </div>
  );
};
export default Contact;
