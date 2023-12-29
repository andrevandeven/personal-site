import "./pictures.css"
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";


const Pictures = () => (
    <div>
        <Parallax className="moray" bgImage={`${process.env.PUBLIC_URL}/Moray.jpg`} strength={300}>
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
                <img src={`${process.env.PUBLIC_URL}/Hawksbill.jpg`} alt="hawksbill"></img>
                <h2 className="section-title">Turtles</h2>
            </Link>
            <Link to="/pictures/fish-portraits" className="gallery-link">
                <img src={`${process.env.PUBLIC_URL}/Lizardfish.jpg`} alt="lizardfish"></img>
                <h2 className="section-title">Fish Portraits</h2>
            </Link>
            <Link to="/pictures/macro" className="gallery-link">
                <img src={`${process.env.PUBLIC_URL}/Shrimp.jpg`} alt="shrimp"></img>
                <h2 className="section-title">Macro</h2>
            </Link>
            <Link to="/pictures/sharks&rays" className="gallery-link">
                <img src={`${process.env.PUBLIC_URL}/shark-photo.jpg`} alt="shark"></img>
                <h2 className="section-title">Sharks & Rays</h2>
            </Link>
            <Link to="/pictures/masters-of-camouflage" className="gallery-link">
                <img src={`${process.env.PUBLIC_URL}/Octopus.jpg`} alt="octopus"></img>
                <h2 className="section-title">Masters of Camouflage</h2>
            </Link>
            <Link to="/pictures/wide-angle" className="gallery-link">
                <img src={`${process.env.PUBLIC_URL}/salt-pier.jpg`} alt="salt-pier"></img>
                <h2 className="section-title">Wide Angle</h2>
            </Link>
        </div>
    </div>
);

export default Pictures;