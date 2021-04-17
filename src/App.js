import Home from './Views/Home'
import Sidebar from './Views/components/bar/Sidebar'
import './App.css';
import { StrictMode } from "react";

function App() {

  return (
    <div className="app">
      <Sidebar />
      <StrictMode>
      <Home />
      </StrictMode>
    </div>
  );
}

export default App;
