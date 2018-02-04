import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';


class App extends Component {
  render() {
    return (
      <div>
      {this.props.children}
    </div>
    );
  }
}

export default App;
