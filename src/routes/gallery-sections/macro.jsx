import "./gallery.css";
import React from 'react';
import ImageCarousel from '../../components/carousel.jsx';

const Macro = () => {
    const drumImages = [
        '/Drum.jpg',
        '/Drum-1.jpg',
    ];

    const bassletImages =[
        '/basslet.jpg',
        '/basslet-1.jpg',
        '/basslet-2.jpg',
    ];

    const shrimpImages = [
        '/Shrimp.jpg',
        '/shrimp-1.jpg',
        '/shrimp-2.jpg',
    ];

    const flamingoTongueImages = [
        '/flamingoTongue-2.jpg',
        '/flamingoTongue-1.jpg',
        '/flamingoTongue.jpg',
    ];

    const threespotImages = [
        '/threespot.jpg',
        '/threespot-1.jpg',
    ];
   
    return (
        <div className="container">
            <div className="title-container">
                <div className="title-lines"></div>
                <h1 className="title">Macro</h1>
                <div className="title-lines"></div>
            </div>

            <div className="carousel-container">
                <ImageCarousel title="Juvenile Spotted Drum" images={drumImages}
                    description=""
                />
            </div>
            <div className="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Fairy Basslet" images={bassletImages}
                    description=""
                />
            </div>
            <div className="separator"></div>
            
            <h2 className="carousel-subheading">Peppermint Goby</h2>
            <img className="individual-img" src={`${process.env.PUBLIC_URL}/goby.jpg`} alt="goby"></img>
            <p className="individual-description">The peppermint goby (Coryphopterus lipernes) can often be found lying on hard coral. 
                They can be identified by their bright blue heads and yellow bodies. They're only 
                about 3 cm long and very skittish, so getting a good picture takes patience. To 
                get this picture, I swam in slowly, inching forward so that the goby became habituated 
                to my presence. Once my camera was a in inch or so away from its head, I was able to 
                take the photo. </p>
            <div className="separator"></div>

            <h2 className="carousel-subheading">Redlip Blenny</h2>
            <img className="individual-img" src={`${process.env.PUBLIC_URL}/redLipped.jpg`} alt="blenny"></img>
            <p className="individual-description">As their name describes them, 
                red-lipped blennies (Ophioblennius atlanticus) can be identified 
                by their pinkish-red lips. Red-lipped blennies remain stationary with 
                occasional hops from coral to coral. They often lie in the open, but they 
                are skittish, making them difficult to photograph.</p>
            <div className="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Spotted Cleaner Shrimp" images={shrimpImages}
                    description=""
                />
            </div>
            <div className="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Flamingo Tongue" images={flamingoTongueImages}
                    description="The flamingo tongue (Cyphoma gibbosum) is a type of snail that is 
                        often found feeding on gorgonians (soft corals). Their colorful exterior is 
                        a membrane surrounding a hard shell within. The flamingo tongue's coloration 
                        may have developed as a way of warning predators not to eat it due to its 
                        poisonous properties. The snail ingests toxins from the soft corals it eats, 
                        and those toxins build up in its body, inflicting harm on predators that ingest 
                        the flamingo tongue."
                />
            </div>
            <div className="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Juvenile Threespot Damselfish" images={threespotImages}
                    description=""
                />
            </div>
            <div className="separator"></div>

            
            
            <p> spinyhead blenny, christmas tree worm, black and white stripped fish, conch, cleaning shrimp</p>
            
        </div>
    );
}

export default Macro;