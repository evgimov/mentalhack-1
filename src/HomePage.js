import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyInput from './MyInput';
import { Grid, Row, Col, Navbar, NavItem, Nav, Panel, Alert, Modal, Button } from 'react-bootstrap';
import Formsy from 'formsy-react';
import { Input}  from 'formsy-react-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import TherapySurvey from './TherapySurvey';
import App from './App';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = { 			
      canSubmit: false,
      patientName: "",
      patientEmail: ""
		};
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (

        <Grid fluid={true}>
				
            <Row className="show-grid main-bg">
                <Col xs={6} md={4} className="centered">
									<h2>Need help</h2>
									<h4>Please, fill out the form</h4>
									<form>
                  <label>
                        Your name
                        <input
                            name="patientName"
                            type="text"
                            onChange={(e)=> this.handleInputChange(e)} />
                    </label>
                    <br />
                    <label>
                        Your email
                        <input
                            name="patientEmail"
                            type="text"
                            onChange={(e)=> this.handleInputChange(e)} />
                    </label>
                    <br />
                    <Link to={{
                        pathname: '/survey',
                      state: { patientName: this.state.patientName, patientEmail: this.state.patientEmail }
                      }} ><button type="submit">Submit</button></Link>
										
									</form>
                </Col>
            </Row>
	      </Grid>	
    );
  }
}

export default HomePage;
