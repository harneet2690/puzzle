import React from "react";
import "./App.scss";
import Menu from "./components/Menu"
import Puzzle from "./components/Puzzle"
import Footer from "./components/Footer"

  const App = () => {    
    return (
      <div className="app-Wapper">
          <Menu/>
          <Puzzle/>
          <Footer/>
      </div>
    );
  }

export default App;
