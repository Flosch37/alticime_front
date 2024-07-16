import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero from'../../img/hero.jpg';
import image1 from '../../img/jardin.jpg';
import image2 from '../../img/altilogo.png';
import image3 from '../../img/hero.jpg';
import rapp from '../../img/rapp.jpg';
import './HomePage.css';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ajouter des flèches de navigation
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <div className="home-page">
      <div className="hero-container">
        <img src={hero} alt="hero du site" className="hero" />
        <div className="hero-text">
          <p>Création de jardins, élagage et entretien des espaces verts</p>
        </div>
      </div>
      <Slider {...settings} className="image-slider">
        <div className='slide'>
          <img src={image1} alt="Image 1" className="image" />
          <img src={image1} alt="Image 1" className="image" />
          <img src={image1} alt="Image 1" className="image" />
        </div>
        <div className='slide'>
          <img src={image2} alt="Image 2" className="image" />
          <img src={image2} alt="Image 2" className="image" />
          <img src={image2} alt="Image 2" className="image" />
        </div>
        <div className='slide'>
          <img src={image3} alt="Image 3" className="image" />
          <img src={image3} alt="Image 3" className="image" />
          <img src={image3} alt="Image 3" className="image" />
        </div>
        {/* Ajoutez plus de séries d'images ici si nécessaire */}
      </Slider>
      <div className="rappel-container">
        <img src={rapp} alt="bouton pour appel" className="rappel-image" />
        <div className="rappel-text">
          <p>Vous souhaitez être rappelé ?</p>
          <button className="leave-number-button">Je laisse mon numéro</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
