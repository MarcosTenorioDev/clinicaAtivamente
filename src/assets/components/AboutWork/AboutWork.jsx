import "./AboutWork.css";
import 'aos/dist/aos.css'

const AboutWork = () => {

  return (
    <>
      <div className="aboutWorkContainer" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className="titleContainer">
          <p className="lineWork"></p>
          <h2 className="aboutWorkTitle">Como trabalhamos</h2>
          <p className="lineWork"></p>
        </div>
        <div className="contentContainer">
          <p className="aboutWorkContent">
            Aqui, nosso objetivo é auxiliar você a trilhar uma jornada de
            autoconhecimento, autoaceitação e crescimento pessoal, buscando uma
            vida mais leve, significativa e em sintonia com seus desejos mais
            profundos. Entendemos que cada indivíduo é único, e é por isso que
            nossa abordagem é totalmente personalizada, adequando-se às suas
            necessidades específicas.
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutWork;
