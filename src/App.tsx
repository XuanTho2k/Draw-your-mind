import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CanvasDrawer from "./components/Canvas";
import { FabricProvider } from "./hooks/useFabric";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold text-red-500 underline">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Farbic
        </a> 
      </header>
*/}
      <FabricProvider>
        <CanvasDrawer />
      </FabricProvider>
    </div>
  );
}

export default App;
