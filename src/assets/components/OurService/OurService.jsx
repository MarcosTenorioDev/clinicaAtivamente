import "./OurService.css";
import Tag from "../Tag/Tag";
import atendimentoSvg from "../../images/atendimentoPersonalizado.svg";
import confiancaSvg from "../../images/emblema-escudo.svg";
import coracaoSvg from "../../images/coracao.svg";
import cerebro from "../../images/cerebro.svg";

const OurService = () => {
  return (
    <div id="ourService">
      <h2 className="ourServiceTitle">
        Principais características do nosso atendimento
      </h2>
      <div className="ourServiceTagContainer">
        <div className="tagTwoBox">
          <Tag
            title="Atendimento Personalizado"
            text="Cada membro da nossa equipe é incentivado a conhecer profundamente nossos clientes, suas preferencias e historico. "
            imageSrc={atendimentoSvg} 
          />
          <Tag
            title="Cuidado e acolhimento"
            text="Cultivamos os valores do cuidado e acolhimento como pilares fundamentais em todas as nossas interações com os clientes. "
            imageSrc={coracaoSvg}
          />
        </div>

        <div className="tagTwoBox">
        <Tag
          title='Confiança e sigilo'
          text='Quando se trata de sigilo, levamos a sério o compromisso de proteger as informações pessoais dos nossos clientes.'
          imageSrc={confiancaSvg}
        />
        <Tag
          title='Terapia-Cognitivo-Comportamental'
          text='Abordagem terapêutica interligando pensamentos, emoções e comportamentos para uma melhor experiência de vida'
          imageSrc={cerebro}
        />
        </div>
      </div>
    </div>
  );
};
export default OurService;
