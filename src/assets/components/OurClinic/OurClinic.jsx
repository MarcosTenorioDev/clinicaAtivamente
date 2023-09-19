import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./OurClinic.css";
import { Pagination, Navigation } from "swiper/modules";
import carrousselTest from "../../images/carrousselTest.jpeg";
import OlindaFrente from "../../images/OlindaFrente.jpeg";



const OurClinic = () => {
  const carrousselData = [
    {
      img: OlindaFrente,
      descriptionTitle: "Clinica Olinda",
      descriptionContent:
        "Endereço: R. Francisco A de Barros Leite, 220 - Bairro Novo, Olinda - PE, 53030-230",
      alt: "Sala da Clínica ativamente",
      link : "https://www.google.com.br/maps/place/R.+Francisco+A+de+Barros+Leite,+220+-+Bairro+Novo,+Olinda+-+PE,+53030-230/@-7.9975277,-34.8433389,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab3d48240c9207:0xbfd7801103c2e074!8m2!3d-7.997533!4d-34.840764!16s%2Fg%2F11hbgkk007?entry",
    },
    {
      img: carrousselTest,
      descriptionTitle: "Clinica Paulista",
      descriptionContent:
        "Av. Sen. Salgado Filho, 21 - Nobre, Paulista - PE, 53401-440",
      alt: "Recepção clinica ativamente",
      link : "https://www.google.com.br/maps/place/Av.+Sen.+Salgado+Filho,+21+-+Nobre,+Paulista+-+PE,+53401-440/@-7.9393139,-34.8826692,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab16125e21f275:0x734f1cb3bfe85f70!8m2!3d-7.9393192!4d-34.8800943!16s%2Fg%2F11h_khr24_?entry=ttu",
    },
  ];
  return (
    <>
      <div className="ourClinicTitleContainer">
        <p className="lineWork"></p>
        <h2 className="ourClinicTitle">Visite nossa clínica</h2>
        <p className="lineWork"></p>
      </div>

      <Swiper
        id="swiperCarroussel"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper carroussel"
      >
        {carrousselData.map((pages) => {
          return (
            <SwiperSlide>
              <div className="imgFilter"></div>
              <img
                src={pages.img}
                alt={pages.alt}
                className="carrousselSlideImg"
              />
              <div className="carrousselDescriptionContainer">
                <div className="descFilter"></div>
                <div className="carrousselDescription">
                  <h2 className="carrousselDescriptionTitle">
                    {pages.descriptionTitle}
                  </h2>
                  <h3 className="carrousselDescriptionContent">
                    {pages.descriptionContent}
                  </h3>
                </div>
                <a href={pages.link} target="blank"><button className="ourClinicMapsBtn">Ver no maps</button></a>
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default OurClinic;
