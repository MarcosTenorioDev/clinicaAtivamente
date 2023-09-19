import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./OurClinic.css";
import { Pagination, Navigation } from "swiper/modules";
import carrousselTest from "../../images/carrousselTest.jpeg";

const OurClinic = () => {
  const carrousselData = [
    {
      img: carrousselTest,
      descriptionTitle: "Clinica Olinda",
      descriptionContent:
        "XXXXXX XXXXXXXXXXXXXXX XXXXXX X XXXXXXXXX XXXXXXXX XXXXXXXX XXX XXXXX XXX XXXXXXXXX XXXX XXXXX",
      alt: "Sala da Clínica ativamente",
      link : "",
    },
    {
      img: carrousselTest,
      descriptionTitle: "Clinica Jaboatão",
      descriptionContent:
        "XXXXXX XXXXXXXXXXXXXXX XXXXXX X XXXXXXXXX XXXXXXXX XXXXXXXX XXX XXXX XXXXXXXX XXXXX XXXXXXXXX",
      alt: "Foto exterior da Clínica ativamente",
      link : "",
    },
    {
      img: carrousselTest,
      descriptionTitle: "Clinica Paulista",
      descriptionContent:
        "XXXXXX XXXXXXXXXXXXXXX XXXXXX X XXXXXXXXX XXXXXX XXXXXXXXXX XXX XXXXX XXXX XXXXX XXX XXXXXXXXX",
      alt: "Recepção clinica ativamente",
      link : "",
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
