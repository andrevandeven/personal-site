import "./gallery.css";
import React from 'react';
import ImageCarousel from '../../components/carousel.jsx';

const Wide = () => {
    const saltPierLandscapeImages = [
        '/salt-pier-5.jpg',
        '/salt-pier.jpg',
        '/salt-pier-1.jpg',
        '/salt-pier-3.jpg',
        '/salt-pier-2.jpg',
    ];

    const saltPierPortraitImages = [
        '/salt-pier-4.jpg',
        '/salt-pier-6.jpg',
    ];

    const hilmaImages = [
        '/hilma-1.jpg',
        '/hilma.jpg',
        '/hilma-2.jpg',
    ];

    return (
        <div className="container">
            <div className="title-container">
                <div class="title-lines"></div>
                <h1 className="title">Wide Angle</h1>
                <div class="title-lines"></div>
            </div>
            <div className="carousel-container">
                <ImageCarousel title="Salt Pier (Portrait)" images={saltPierPortraitImages}
                    description=""
                />
            </div>
            <div className="carousel-container">  
                <ImageCarousel title="Salt Pier (Landscape)" images={saltPierLandscapeImages}
                    description="Bonaire's salt pier is one of my favorite dive sites in the world. 
                    The pier is used as a loading dock for ships exporting salt from the island. It's 
                    comprised of a series of platforms, each with columns descending to the ocean floor. 
                    Each column is overgrown with life including coral, algae, and sponges, creating a 
                    beautiful artificial reef. The angle at which sunlight pierces through the gaps in the 
                    columns creates some great photography opportunities. At the salt pier, divers can find 
                    anything from barracudas to massive schools of fish to frogfish. The coral itself isn't in 
                    top shape due to the heavy boat traffic, but the lack of coral cover is made up for by the 
                    sheer diversity of fauna that this site harbors."
                />
            </div>
            <div class="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Hilma Hooker" images={hilmaImages}
                    description=""
                />
            </div>
            <div class="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Tarpon" images={hilmaImages}
                    description=""
                />
            </div>
            <div class="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Barracuda" images={hilmaImages}
                    description=""
                />
            </div>
            
        </div>
    );
}

export default Wide;