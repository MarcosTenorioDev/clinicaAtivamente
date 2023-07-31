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
            text="xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx"
            imageSrc={atendimentoSvg}
          />
          <Tag
            title="Cuidado e acolhimento"
            text="xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx"
            imageSrc={coracaoSvg}
          />
        </div>

        <div className="tagTwoBox">
        <Tag
          title='Confiança e sigilo'
          text='xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx'
          imageSrc={confiancaSvg}
        />
        <Tag
          title='Terapia-Cognitivo-Comportamental'
          text='xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx'
          imageSrc={cerebro}
        />
        </div>
      </div>
    </div>
  );
};
export default OurService;
