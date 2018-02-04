import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
      </div>
    );
  }
}

export default App;
