import Home from './Views/Home/Home'
import One from './Views/Proyects/One/One.js'
import Two from './Views/Proyects/Two/Two.js'
import Three from './Views/Proyects/Three/Three.js'
import Four from './Views/Proyects/Four/Four.js'
import Sidebar from './Views/components/bar/Sidebar'
import Footer from './Views/components/footer/Footer.js' 
import './App.css';
import { StrictMode } from "react";

function App() {

  return (
    <div className="app">
      <Sidebar />
      <StrictMode>
      <Home />
      <One />
      <Two />
      <Three />
      <Four />
      <Footer />
      </StrictMode>
    </div>
  );
}

export default App;
