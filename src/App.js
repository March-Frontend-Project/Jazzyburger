// import bannerImage from './images/herobanner.png';
import desktopImg from '../src/images/herobanner.png';
import mobileImg from '../src/images/mobile herobanner.png';

function App() {
  return (
    <div className="App">
    <img src={desktopImg} className="desktop-only" alt="..." />
    <img src={mobileImg} className="mobile-only" alt="..."/>
    </div>
  );
}

export default App;
