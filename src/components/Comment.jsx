import React, { useState, useEffect } from "react";
import "./Comment.scss";
import comment1 from "./img/Comment1.png";
import comment2 from "./img/Comment2.png";
import comment3 from "./img/Comment3.png";

const images = [
  comment1,
  comment2,
  comment3,
  comment1,
  comment2,
  comment3,
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
          <h1 className="header_com">Clients Testimonial</h1>
    <div className="slider">
      
      <div className="slider-container">
        <div className="slider-images" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {images.map((image, index) => (
            <img key={index} className="slider-image" src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
      
      <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    </div>
  );
};

export default Slider;
