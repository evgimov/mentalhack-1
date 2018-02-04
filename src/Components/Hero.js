import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <section className="hero is-large is-dark is-bold">
        <div className="hero-body hero-image">
          <div className="container">
            <div className="buttons is-centered">
              <a className="button is-primary is-large is-centered">
                I NEED HELP
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
