import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyInput from './MyInput';
import { Grid, Row, Col, Navbar, NavItem, Nav, Panel, Alert, Modal, Button } from 'react-bootstrap';
import Formsy from 'formsy-react';
import { Input}  from 'formsy-react-components';

class EntryPage extends Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
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

	submitForm(data) {
		let name = data.name;
		let email = data.email;
		console.log("Name" + name);
		console.log("Email" + email);
		// rest api call
	};

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
										/>
										<MyInput
											name="email"
											validations="isEmail"
											validationError="This is not a valid email"
										/>
										<button type="submit" disabled={!this.state.canSubmit}>Submit</button>
									</Formsy>
                </Col>
            </Row>
	      </Grid>
    );
  }
}

export default EntryPage;
