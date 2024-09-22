import './App.css';
import Header from './components/Header';
import ggb from './assets/videos/ggb.mov'

function App() {
  return (
    <div className="App">
      <Header/>
      <body>
        <h3>Welcome to STATE</h3>
        <text>We are a non-profit design studio on a mission to empower aspiring designers</text>
        <video src={ggb} autoPlay loop muted/>
      </body>
    </div>
  );
}

export default App;
