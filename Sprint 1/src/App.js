import './App.scss';
import Home from './pages/Home';
import mainVideo from './utils/mainVideo'

function App() {
  return (
    <Home mainVideo={mainVideo}/>
  );
}

export default App;