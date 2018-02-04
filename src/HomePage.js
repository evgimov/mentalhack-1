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
    this.state = { 			
      canSubmit: false
		};
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }


  render() {
    return (

        <Grid fluid={true}>
				
            <Row className="show-grid main-bg">
                <Col xs={6} md={4} className="centered">
									<h2>Need help?</h2>
									<h4>Please, fill out the form</h4>
									<Formsy onValidSubmit={this.submitForm} onValid={this.enableButton} onInvalid={this.disableButton}>
										<MyInput
                      name="name"
                      value=""
                      placeholder="Enter your name"
                      label="Name"
										/>
										<MyInput
											name="email"
                      value=""
                      placeholder="Enter your email"
                      label="Email"
										/>
                    <Link to={{
                        pathname: '/survey',
                      state: { patientName: "Erica", patientEmail: "test@email.com" }
                      }} ><button type="submit" disabled={!this.state.canSubmit}>Submit</button></Link>
										
									</Formsy>
                </Col>
            </Row>
	      </Grid>	
    );
  }
}

export default HomePage;
