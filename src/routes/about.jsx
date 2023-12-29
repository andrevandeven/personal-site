import "./about.css"

export default function About() {
    return (
        <div className = "container">
            <h1 className="title" >About Me</h1>
            <img className = "portrait" src="/portrait.jpeg"></img>
            <div className="description-container">
                <p className="description">My name is Andre van de Ven, and I'm a 19-year-old student from New Jersey pursuing a
                    double major in biology and computer science at the University of Pennsylvania. I aspire to leverage
                    AI and machine learning tools to create change in the life science and healthcare industries.
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
