import "./pictures.css"
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";


const Pictures = () => (
    <div>
        <Parallax className="moray" bgImage="/Moray.jpg" strength={300}>
            <div className="content">
                <h1 className="gallery-title">Photo Gallery</h1>
                <div className="scroll-down">
                    Scroll Down
                    <div className="arrow"></div>
                </div>
            </div>
        </Parallax>
        <div className="gallery-links-container">
            <Link to="/pictures/turtles" className="gallery-link">
                <img src="/Hawksbill.jpg" alt="hawksbill"></img>
                <h2 className="section-title">Turtles</h2>
            </Link>
            <Link to="/pictures/fish-portraits" className="gallery-link">
                <img src="/Lizardfish.jpg" alt="lizardfish"></img>
                <h2 className="section-title">Fish Portraits</h2>
            </Link>
            <Link to="/pictures/macro" className="gallery-link">
                <img src="/Shrimp.jpg" alt="shrimp"></img>
                <h2 className="section-title">Macro</h2>
            </Link>
            <Link to="/pictures/sharks&rays" className="gallery-link">
                <img src="/Shark-photo.jpg" alt="shark"></img>
                <h2 className="section-title">Sharks & Rays</h2>
            </Link>
            <Link to="/pictures/masters-of-camouflage" className="gallery-link">
                <img src="/Octopus.jpg" alt="octopus"></img>
                <h2 className="section-title">Masters of Camouflage</h2>
            </Link>
            <div className="gallery-link">
                <img src="/salt-pier.jpg" alt="salt-pier"></img>
                <h2 className="section-title">Wide Angle</h2>
            </div>
        </div>
    </div>
);

export default Pictures;