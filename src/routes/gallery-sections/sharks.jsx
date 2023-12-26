import "./gallery.css";
import React from 'react';
import ImageCarousel from '../../components/carousel.jsx';

const Sharks = () => {
    const sharkImages = [
        "/reefShark.jpg",
        "/reefShark-1.jpg",
        "/reefShark-2.jpg",
    ];

    const eagleRayImages = [
        "/eagleRay-1.jpg",
        "/eagleRay.jpg",
    ];

    const stingRayImages = [
        "/stingRay-2.jpg",
        "/stingRay.jpg",
        "/stingRay-1.jpg",
    ];

    

    return (
        <div className="container">
            <div className="title-container">
                <div class="title-lines"></div>
                <h1 className="title">Sharks & Rays</h1>
                <div class="title-lines"></div>
            </div>
            <div className="carousel-container">
                <ImageCarousel title="Caribbean Reef Shark" images={sharkImages}
                    description="The Caribbean Reef Shark (Carcharhinus perezi) can often 
                    be found gliding gracefully along the edge of a drop off or further down 
                    along the wall. Although they might seem frightening, they are largely indifferent 
                    to human presence. If you get close, the shark will stare at you from the side 
                    with one eye locked onto you until it passes by. If you happen to be blocking its path, 
                    the shark will simply go around you. The first picture was taken at a distance of about 
                    2 feet from the shark (I didn't realize I was so close because the lens I was using made 
                    the shark look farther away on my camera). Despite my close proximity, the shark barely
                    took notice of my presence and continued to swim forward. Sharks are often demonized in 
                    the media, but in reality, they are generally harmless in most of their encounters with humans."
                />
            </div>
            <div class="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Spotted Eagle Ray" images={eagleRayImages}
                    description="The spotted eagle ray (Aetobatus narinari) may be found along the sandy ocean 
                    floor between areas of the reef. Eagle rays frequent sandy areas because they hunt for food 
                    within the sand; they use their shovel-shaped snouts to dig in the sand and then use their 
                    plate-like teeth to crack open the shells of crustaceans and mollusks they uncover. Eagle rays 
                    can also be found gliding over the blue above the deep end of coral reefs, traveling to their 
                    next destination. "
                />
            </div>
            <div class="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Southern Stingray" images={stingRayImages}
                    description=""
                />
            </div>
            <div class="separator"></div>
            
        </div>
    );
}

export default Sharks;