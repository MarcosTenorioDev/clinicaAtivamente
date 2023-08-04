import Card from "../Card/Card";
import "../Operation/Operation.css";
import acolhimento from "../../images/acolhimentos.svg";
import depressao from "../../images/depressao.svg";
import burnout from "../../images/burnout.svg";
import ansiedade from "../../images/ansiedade.svg";
import estresse from "../../images/estresse.svg";
import inseguranca from "../../images/inseguranca.svg";
import Slider from "../Slider/Slider";

const Operation = () => {
  const cards = [
    {
      title: "Ansiedade",
      content: "Emoção de preocupação, medo e tensão; pode ser normal ao estresse, mas em excesso se torna um transtorno que prejudica a vida diária.",
      imgSrc: ansiedade,
    },
    {
      title: "Depressão",
      content: " Transtorno mental com tristeza persistente e perda de interesse nas atividades diárias.",
      imgSrc: depressao,
    },
    {
      title: "Estresse",
      content: " Resposta física e emocional a situações desafiadoras; pode ser útil em doses moderadas, mas em excesso pode causar danos à saúde e ao bem-estar.",
      imgSrc: estresse,
    },
    {
      title: "Medo e insegurança",
      content: "Emoções naturais, medo é reação a ameaças, insegurança é falta de confiança; ambos impactam comportamentos, mas podem ser superados com apoio.",
      imgSrc: inseguranca,
    },
    {
      title: "Burnout",
      content: "Esgotamento por estresse no trabalho; leva a baixo desempenho e despersonalização; requer cuidados para evitar impactos na saúde e vida pessoal.",
      imgSrc: burnout,
    },
    {
      title: "Outros acolhimentos",
      content: (
        <ul>
          <li>Autocobrança</li>
          <li>Procrastinação</li>
          <li>Timidez</li>
          <li>Insatisfação e Transição de Carreira</li>
          <li>Dificuldade para tomar decisões</li>
          <li>Autoconhecimento e Desenvolvimento Pessoal</li>
        </ul>
      ),
      imgSrc: acolhimento,
    },
  ];

  return (
    <div id="operation">
      <h2 className="operationTitle">Principais Atuações</h2>
      <div className="operationContainer">
        <div className="operationCardsContainer">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} imgSrc={card.imgSrc} />
          ))}
        </div>
      </div>

      <Slider>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} imgSrc={card.imgSrc} />
        ))}
      </Slider>
    </div>
    
  );
};

export default Operation;
