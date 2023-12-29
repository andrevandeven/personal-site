import "./gallery.css";
import React from 'react';
import ImageCarousel from '../../components/carousel.jsx';

const FishPortraits = () => {
    const lizardfishImages = [
        '/Lizardfish.jpg',
        '/Lizardfish-1.jpg',
        '/Lizardfish-3.jpg',
        '/Lizardfish-2.jpg',
    ];

    const morayImages = [
        '/Goldentail.jpg',
        '/Goldentail-1.jpg',
        '/Goldentail-2.jpg',
    ];

    const lionfishImages = [
        '/Lionfish.jpg',
        '/Lionfish-1.jpg',
    ];

    const barracudaImages = [
        '/Barracuda.jpg',
        '/Barracuda-1.jpg',
    ];

    const angelfishImages = [
        '/Angelfish.jpg',
        '/Angelfish-2.jpg',
    ];

    const gruntImages = [
        '/Grunt.jpg',
        '/Grunt-1.jpg',
        '/Grunt-2.jpg',
    ];

    const porcupineImages = [
        '/porcupine.jpg',
        '/porcupine-1.jpg',
        '/porcupine-2.jpg',
    ];

    const chestnutImages = [
        '/chestnut.jpg',
        '/chestnut-1.jpg',
    ];

    const trumpetfishImages = [
        '/trumpetfish.jpg',
        '/trumpetfish-1.jpg',
    ];

    return (
        <div className="container">
            <div className="title-container">
                <div class="title-lines"></div>
                <h1 className="title">Fish Portraits</h1>
                <div class="title-lines"></div>
            </div>
            <div className="carousel-container">
                <ImageCarousel title="Lizardfish" images={lizardfishImages}
                    description=""
                />
            </div>
            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="Goldentail Moray Eel" images={morayImages}
                    description="The goldentail moray eel (Gymnothorax miliaris) is often found in crevasses with 
                        its head poking out and the remainder of its snake-like body unexposed. They spend most of 
                        their day in this position, but at night they leave their holes to hunt for prey. While remaining 
                        stationary during the day, they'll open their mouth from time to time. This may look like a sign of 
                        aggression, but they're only doing it to increase the flow of water through their gills. The goldentail
                        moray is my favorite type of moray eel because of its dazzling appearance and its colorful eyes which 
                        are reminiscent of the Eye of Sauron from The Lord of the Rings."
                />
            </div>
            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="Lionfish" images={lionfishImages}
                    description="The red lionfish (Pterois volitans) is native to the waters of the Indian and Pacific Oceans 
                    and is invasive to the Caribbean. It is theorized that they were released as aquarium pets into the Atlantic 
                    Ocean from the East coast of the United States. From there, they were able to reproduce exponentially and 
                    wreak havoc on the environment because they have no natural predators in the Caribbean. The lionfish has 18 
                    venomous spines that inflict extreme pain onto anyone that they sting. Although lionfish are dangerous and 
                    threaten Caribbean coral reefs, they make very good photography subjects because they're bright and they aren't 
                    afraid of humans (they have no natural predators in the Atlantic), so you can get very close without them swimming away. "
                />
            </div>
            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="Barracuda" images={barracudaImages}
                    description=""
                />
            </div>
            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="French Angelfish" images={angelfishImages}
                    description=""
                />
            </div>
            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="Bluestriped Grunt" images={gruntImages}
                    description=""
                />
            </div>

            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="Porcupine Fish" images={porcupineImages}
                    description=""
                />
            </div>

            <div class="separator"></div>
            <h2 className="carousel-subheading">Chain Moray Eel</h2>
            <img className="individual-img" src={`${process.env.PUBLIC_URL}/chain-1.jpg`} alt="chain"></img>
            <p className="individual-description"> </p>

            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="Chestnut Moray Eel" images={chestnutImages}
                    description=""
                />
            </div>

            <div class="separator"></div>
            <div className="carousel-container">
                <ImageCarousel title="Trumpetfish" images={trumpetfishImages}
                    description=""
                />
            </div>
        </div>
    );
}

export default FishPortraits;