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
              desc="+55 (81) 9663-5917"
            />

            <Icons
              imgIcon={email}
              title="Email"
              desc="atvmt4.0@gmail.com"
            />
          </div>
          <div className="contactTwoIconsBox">
            <a href="https://linktr.ee/clinicaativamentepsi" target="_blank">
            <Icons 
              
              imgIcon={location}
              title="Localização"
              desc="Olinda-Pe"
            /></a>

            <Icons
              imgIcon={user}
              title="Redes Sociais"
              descImg={instagram}
              link="https://instagram.com/ativamenth?igshid=MzRlODBiNWFlZA=="
            />
          </div>

        </div>
      </div>
    </div>
  );
};
export default Contact;
