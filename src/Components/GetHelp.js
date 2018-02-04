import React, { Component } from "react";
import Grid from "material-ui/Grid";

import "./GetHelp.css";

class GetHelp extends Component {
  render() {
    return (
      <Grid alignItems="center" justify="center" container spacing={16}>
        <Grid item className="container" alignItems="center" justify="center">
          <button>I Need Help</button>
        </Grid>
      </Grid>
    );
  }
}

export default GetHelp;
