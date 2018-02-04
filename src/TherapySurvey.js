import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, NavItem, Nav, Panel, Alert, Modal, Button } from 'react-bootstrap';

import makeApiCall from './makeApiCall';

class TherapySurvey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            email: this.props.email,
            individual: false,
            couples: false,
            group: false,
            primaryIssue: "getting React forms to work"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleChecked = this.toggleChecked.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState ({[name] : value}, () => console.log(this.state));

    }

    toggleChecked(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        this.setState({[name]: !this.state[name]}, () => console.log(this.state));
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("state of the user", this.state);
        makeApiCall.saveUser(this.state)
    }

    render() {
        console.log(this.props);
        return (
            <div className="therapySurvey">
                <h1>Hi ,{this.props.location.state.patientName} !!!</h1>
                <form>
                    <div>There are many ways to receive therapy. Which of the following types would you be interested in?</div>
                    <label>
                        Individual
                        <input
                            name="individual"
                            type="checkbox"
                            checked = {this.state.individual}
                            onChange={(e)=> this.toggleChecked(e)} />
                    </label>
                    <br />
                    <label>
                        Couples
                        <input
                            name="couples"
                            type="checkbox"
                            checked = {this.state.couples}
                            onChange={(e)=> this.toggleChecked(e)} />
                    </label>
                    <label>
                        Group
                        <input
                            name="group"
                            type="checkbox"
                            checked = {this.state.group}
                            onChange={(e)=> this.toggleChecked(e)} />
                    </label>
                    <br />
                    <div>Here are some symptoms and issues that typically bring people to therapy. </div>
                    <div>Please select the issue you feel is causing you the greatest stress </div>

                    <label>
                        My most important problem is:
                        <select name="primaryIssue" value={this.state.primaryIssue} onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Select an issue</option>
                            <option value="depression">Depression, bipolar, other mood disorders</option>
                            <option value="anxiety">Anxiety, OCD, panic attacks</option>
                            <option value="relationships">Relationships and sex</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <div><button type="submit" onClick={(e) => this.handleSubmit(e)}>Submit</button></div>
                </form>
                    <div>Your primary issue is {this.state.primaryIssue}</div>
            </div>
        );
    }
}

export default TherapySurvey;