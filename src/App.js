import './App.css';
import { Link } from "react-router-dom";


export default function App() {
  return (
    <div className='container'>
      <div className='bubble-container'>
        <div className='bubbles'>
          <span className="bubble bubble1"></span>
          <span className="bubble bubble2"></span>
          <span className="bubble bubble3"></span>
          <span className="bubble bubble4"></span>
          <span className="bubble bubble5"></span>
          <span className="bubble bubble6"></span>
          <span className="bubble bubble7"></span>
          <span className="bubble bubble8"></span>
          <span className="bubble bubble9"></span>
          <span className="bubble bubble10"></span>
          <span className="bubble bubble11"></span>
          <span className="bubble bubble12"></span>
          <span className="bubble bubble13"></span>
          <span className="bubble bubble14"></span>
          <span className="bubble bubble15"></span>
          <span className="bubble bubble16"></span>
          <span className="bubble bubble17"></span>
          <span className="bubble bubble18"></span>
          <span className="bubble bubble19"></span>
          <span className="bubble bubble20"></span>
          <span className="bubble bubble21"></span>
          <span className="bubble bubble22"></span>
          <span className="bubble bubble23"></span>
          <span className="buffer"></span>
          <span className="bubble bubble24"></span>
          <span className="bubble bubble25"></span>
          <span className="bubble bubble26"></span>
          <span className="bubble bubble27"></span>
          <span className="bubble bubble28"></span>
          <span className="bubble bubble29"></span>
          <span className="bubble bubble30"></span>
          <span className="bubble bubble31"></span>
          <span className="bubble bubble32"></span>
          <span className="bubble bubble33"></span>
          <span className="bubble bubble34"></span>
          <span className="bubble bubble35"></span>
          <span className="bubble bubble36"></span>
          <span className="bubble bubble37"></span>
          <span className="bubble bubble38"></span>
          <span className="bubble bubble39"></span>
          <span className="bubble bubble40"></span>
          <span className="bubble bubble41"></span>
          <span className="bubble bubble42"></span>
          <span className="bubble bubble43"></span>
          <span className="bubble bubble44"></span>
          <span className="bubble bubble45"></span>
          <span className="bubble bubble46"></span>
        </div>
      </div>
      <div className='interface-container'>
        <h1>Andre van de Ven</h1>
        <span className="subheadingTotal">
          <span>I am a&nbsp;</span>
          <span className="developer ">developer</span>
          <span>&nbsp;and&nbsp;</span>
          <span className="UWphotographer">underwater photographer</span>
          <span>&nbsp;studying </span>
          <span className="compBio">&nbsp;computational biology</span>
          <span>&nbsp;at the University of Pennsylvania.</span>
        </span>

        <nav>
          <Link to="/projects">
            <div className='projects-link'>
              <p>Projects</p>
            </div>
          </Link>
          <Link to="/pictures">
            <div className='pictures-link'>
              <p>Pictures</p>
            </div>
          </Link>
          <Link to="/about">
            <div className='about-link'>
              <p>About</p>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
