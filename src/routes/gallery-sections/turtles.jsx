import "./gallery.css";
import React from 'react';
import ImageCarousel from '../../components/carousel.jsx';

const Turtles = () => {
    const hawksbillImages = [
        '/Hawksbill.jpg',
        '/Hawksbill-2.jpg',
        '/Hawksbill-1.jpg',
        '/Hawksbill-3.jpg',
    ];

    const greenTurtlesImages = [
        '/GreenTurtle.jpg',
        '/GreenTurtle-1.jpg',
        '/GreenTurtle-2.jpg',
        '/GreenTurtle-3.jpg',
    ];

    const greenTurtlesTurksImages = [
        '/GreenTurtle-4.jpg',
        '/GreenTurtle-6.jpg',
        '/GreenTurtle-5.jpg',
    ];

    return (
        <div className="container">
            <div className="title-container">
                <div class="title-lines"></div>
                <h1 className="title">Turtles</h1>
                <div class="title-lines"></div>
            </div>
            <div className = "carousel-container">
                <ImageCarousel title="Hawksbill Sea Turtles of Bonaire" images={hawksbillImages}
                    description="The hawksbill sea turtle (Eretmochelys imbricata) can commonly be found 
                        grazing on coral reefs. I found this particular turtle on an afternoon dive eating 
                        algae off sand and rocks. This turtle was probably the calmest and most photogenic 
                        turtle I've ever seen. She remained unbothered while I photographed her for twenty 
                        minutes, occasionally taking trips to the surface to breathe."
                />
            </div>
            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="Green Sea Turtles of Bonaire" images={greenTurtlesImages}
                    description="The green sea turtle (Chelonia mydas) is often found grazing on seagrass. 
                    The turtles pictured above were found swimming over the seagrass meadows near Bonaire's salt pier. 
                    After diving the salt pier, it's almost certain that you will encounter at least one of these turtles if you exit from the north."
                />
            </div>
            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="Green Sea Turtles of Turks and Caicos" images={greenTurtlesTurksImages}
                    description="The turtles pictured above were found feeding on seagrass off the shores of Providenciales. 
                    These were the most skittish out of all the turtles I've encountered, probably due to the fact that most of 
                    the humans they encounter are splashing beachgoers rather than divers. "
                />
            </div>
        </div>
    );
}

export default Turtles;