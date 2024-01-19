import "./about.css"

export default function About() {
    return (
        <div className = "container">
            <h1 className="title" >About Me</h1>
            <img className="portrait" src={`${process.env.PUBLIC_URL}/portrait.jpeg`} alt="Portrait of Andre van de Ven"/>
            <div className="description-container">
                <p className="description">My name is Andre van de Ven, and I'm a dual degree student at the University of 
                    Pennsylvania studying computational biology and business at Wharton. I aspire to leverage
                    AI and machine learning tools to solve problems in business and healthcare.
                </p>

                <p className="description">Underwater wildlife photography is another passion of mine. This website contains some of my favorite photos that I have taken.
                    Most of my work captures images of unique marine flora and fauna in order to share the beauty of the sea with those who have
                    not experienced it. 
                </p>

                <p className="description">All of the work, both projects and photos, displayed on this website are created by me.</p>
            </div>
        </div>
    );
}
