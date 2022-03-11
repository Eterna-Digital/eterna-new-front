import Home from "./Views/Home/Home";
import Terms from "./Views/components/footer/Terms";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import { StrictMode } from "react";

function App() {
  return (
    <div className="app">
      <StrictMode>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/terms" component={Terms} />
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

export default App;
