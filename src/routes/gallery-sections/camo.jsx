import "./gallery.css";
import React from 'react';
import ImageCarousel from '../../components/carousel.jsx';

const Camo = () => {
    const octopusImages = [
        '/octopus.jpg',
        '/octopus-2.jpg',
        '/octopus-1.jpg',
    ];

    const frogfishImages = [
        '/Frogfish-4.JPG',
        '/Frogfish-2.JPG',
        '/Frogfish-3.JPG',
        '/Frogfish.JPG',
    ];

    const scorpionfishImages = [
        '/scorpionfish.jpg',
        '/scorpionfish-1.jpg',
        '/scorpionfish.jpeg',
    ];

    return (
        <div className="container">
            <div className="title-container">
                <div class="title-lines"></div>
                <h1 className="title">Masters of Camouflage</h1>
                <div class="title-lines"></div>
            </div>

            <div className="carousel-container">
                <ImageCarousel title="Common Octopus" images={octopusImages}
                    description="The common octopus (Octopus vulgaris) can usually be found hiding in 
                    cracks and crevices to sleep during the day. They're nocturnal animals, meaning they 
                    wake up at night to hunt for food. Octopuses are generally hard to spot they are able 
                    to change the color and texture of their skin to blend in with their environment. This 
                    octopus was pretty confident in its camouflage, as it sat in a relatively exposed spot 
                    and didn't move when I got close to take pictures. If you look at the bottom of the first 
                    photo, you can see remnants of this octopus's last meal; it's holding a crab shell in the 
                    left tentacle, presumably the remnants of its last meal. "
                />
            </div>
            <div class="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Frogfish" images={frogfishImages}
                    description="Two different longlure frogfish (Antennarius multiocellatus) are pictured above. 
                    These are some of the most unique fish you'll ever see (if you can find them). They camouflage 
                    extremely well, blending into the environment to look just like a sponge. I swam past these two 
                    fish ten times before finding them. The joy in finding them isn't due to their looks (they're pretty 
                    ugly if you haven't noticed) but due to the fact that they're so rare and hard to find. When I first 
                    came across the frogfish, I only noticed one large female sitting by herself. After photographing her 
                    for around ten minutes, she swam into a vertical position with her head facing down and did a sort of 
                    mating dance. A few seconds later, a small bright yellow male frogfish appeared and walked toward the 
                    female. Frogfish can't really swim; instead they walk on the seafloor using their fins. They ended up 
                    sitting next to each other, and I was able to get a few shots of both of them in the same frame. "
                />
            </div>
            <div class="separator"></div>

            <div className="carousel-container">
                <ImageCarousel title="Scorpionfish" images={scorpionfishImages}
                    description="At first, the spotted scorpionfish (Scorpaena plumieri) might look like a rock, but unlike a rock, 
                    this fish has over 15 venomous spines that can ruin a day at the beach in an instant. The scorpionfish does 
                    little swimming, as it instead lies in wait for its unsuspecting victims to get close. Once in range, 
                    the scorpionfish will open its mouth very wide (as shown in the third picture) and swallow its prey in one 
                    gulp. Scorpionfish are fairly common, and I have seen up to seven of them sitting on the same boulder. "
                />
            </div>

        </div>
    );
}

export default Camo;