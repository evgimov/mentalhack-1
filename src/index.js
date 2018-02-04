import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  HashRouter
} from 'react-router-dom';


import "typeface-roboto";
import TherapySurvey from "./TherapySurvey";
import HomePage from "./HomePage";
//import "bulma/css/bulma.css";


ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={HomePage} />
      <Route path="/survey" component={TherapySurvey} />
    </App>
  </Router>,
  document.getElementById("root")
);

/*const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};
render(App);



// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}*/
