import "../OurClinics/OurClinics.css"
import ClinicaPaulista from '../../images/ClinicaPaulista.jpg'
import ClinicaOlinda from '../../images/ClinicaOlinda.jpg'
import React, { useState } from 'react'; // Don't forget to import useState


const clinicsData = [
    {
        image: ClinicaPaulista,
        title: 'Clínica Paulista',
        description:
            'Av. Senador Salgado Filho, N° 21, Prédio da Uninassau Térreo',
        link: 'https://www.google.com.br/maps/place/Av.+Sen.+Salgado+Filho,+21+-+Nobre,+Paulista+-+PE,+53401-440/@-7.9393192,-34.8800943,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab16125e21f275:0x734f1cb3bfe85f70!8m2!3d-7.9393192!4d-34.8800943!16s%2Fg%2F11h_khr24_?entry=ttu',
    },
    {
        image: ClinicaOlinda,
        title: 'Clínica Olinda',
        description:
            'Rua Francisco Ambrósio leite, 220 Saia 04 Bairro Novo - Olinda Rua da antiga caixa econômica federal. Fica próximo do shopping Patteo',
        link: 'https://www.google.com.br/maps/place/R.+Francisco+A+de+Barros+Leite,+220+-+Bairro+Novo,+Olinda+-+PE,+53030-230/@-7.997533,-34.840764,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab3d48240c9207:0xbfd7801103c2e074!8m2!3d-7.997533!4d-34.840764!16s%2Fg%2F11hbgkk007?entry=ttu',
    },
];

const OurClinics = () => {


    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % 2);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + 2) % 2);
    };


    return (
        <>
            <div className="aboutWorkContainer" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="titleContainer">
                    <p className="lineWork"></p>
                    <h2 className="aboutWorkTitle">Conheça nossas clínicas</h2>
                    <p className="lineWork"></p>
                </div>

                
                    <div className="slider-container">
                        <div className="slider-slide">
                            <button className="slider-button prev-button" onClick={prevSlide}>
                                &lt;
                            </button>
                            <div className="image-container">
                                <img src={clinicsData[currentSlide].image} alt="Clinica" />
                                <div className="slide-description">
                                    <div className="description">
                                        <div className="description-title">
                                            {clinicsData[currentSlide].title}
                                        </div>
                                        <div className="description-text">
                                            {clinicsData[currentSlide].description}
                                        </div>
                                    </div>
                                    <div className="description-button">
                                        <a
                                            href={clinicsData[currentSlide].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                        >
                                            Ver no mapa
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button className="slider-button next-button" onClick={nextSlide}>
                                &gt;
                            </button>
                        </div>
                    </div>
            </div>
        </>
    );
};
export default OurClinics;