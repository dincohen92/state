import Header from './components/Header';
import ggb from './assets/videos/ggb.mov'

function App() {
  return (
    <div className="app">
      <Header/>
      <body>
        <div className="call-to-action">
          <video src={ggb} autoPlay loop muted className="cta-bg-video"/>
          <h3>Welcome to the</h3>
          <h1>STATE DESIGN COLLECTIVE</h1>
          <h3>We are a non-profit design studio on a mission to empower aspiring designers</h3>
        </div>
        <div className="work">
          <h1>Projects</h1>
        </div>
      </body>
    </div>
  );
}

export default App;
