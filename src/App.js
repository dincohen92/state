import './App.css';
import Header from './components/Header';
import ggb from './assets/videos/ggb.mov'

function App() {
  return (
    <div className="App">
      <Header/>
      <body>
        <div className="CallToAction">
          <h1>Welcome to STATE</h1>
          <text>We are a non-profit design studio on a mission to empower aspiring designers</text>
          <video src={ggb} autoPlay loop muted/>
        </div>
        <div className="work">
          <h1>Projects</h1>
        </div>
        <div className="staff">
          <h1>Meet Our Team</h1>
        </div>
        <div className="contact">
          <h1>Get In Touch</h1>
        </div>
      </body>
    </div>
  );
}

export default App;
