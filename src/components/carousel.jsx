import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ title, images, description }) => {
    return (
        <div>
            <h2 className="carousel-subheading">{title}</h2>
            
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                >
                    {images.map((image, index) => (
                        <div key={index} className="carousel-img-container">
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Carousel>
            
            <p className="description">{description}</p>
        </div>
    );
};

export default ImageCarousel;
