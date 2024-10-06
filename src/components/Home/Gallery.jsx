import { useState } from 'react';
import "../../assets/css/components/Gallery.css";

const Gallery = () => {
  const images = [
    { src: './assets/images/collage-2.jpg', alt: 'Students learning' },
    { src: './assets/images/collage-3.jpg', alt: 'NGO' },
    { src: './assets/images/collage-4.jpg', alt: 'Students learning' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="gallery" id="gallery">
      <h2> Gallery </h2>
      <p> Explore our work through images and videos. </p>

      <div className="view-gallery">
        <h4> View Gallery </h4>

        <div className="carousel">
          <button className="prev-btn" onClick={handlePrevClick}>
            &#10094;
          </button>
          <div className="gallery-image">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="carousel-image"
            />
          </div>
          <button className="next-btn" onClick={handleNextClick}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

