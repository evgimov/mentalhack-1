import React, { Component } from 'react';

class TherapySurvey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            therapyTypes: {individual: false, couples: false, group: false},
            primaryIssue: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event, category) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


        this.setState({
            therapyTypes: true
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        //call API to submit form
    }

    render() {
        return (
            <div className="therapySurvey">
                    <div>There are many ways to receive therapy. Which of the following types would you be interested in?</div>
                    <label>
                        Individual
                        <input
                            name="individual"
                            type="checkbox"
                            checked={this.state.therapyTypes.individual}
                            onChange={(e)=> this.handleInputChange(e)} />
                    </label>
                    <br />
                    <label>
                        Couples
                        <input
                            name="couples"
                            type="checkbox"
                            checked={this.state.therapyTypes.couples}
                            onChange={(e)=> this.handleInputChange(e, "therapyTypes")} />
                    </label>
                    <label>
                        Group
                        <input
                            name="group"
                            type="checkbox"
                            checked={this.state.therapyTypes.group}
                            onChange={(e)=> this.handleInputChange(e, "therapyTypes")} />
                    </label>
                    <br />
                    <div>Here Are some symptoms and issues that typically bring people to therapy. </div>
                    <div>Please select the issue you feel is causing you the greatest stress </div>
                    <label>
                        Depression, bipolar, or other mood imbalance
                        <input
                            name="depression"
                            type="checkbox"
                            checked={this.state.primaryIssue}
                            onChange={(e)=> this.handleInputChange(e, "primaryIssue")} />
                    </label>
                    <br />
                    <label>
                        Anxiety, OCD, panic attacks
                        <input
                            name="anxiety"
                            type="checkbox"
                            checked={this.state.primaryIssue}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Relationships and sex
                        <input
                            name="relationships"
                            type="checkbox"
                            checked={this.state.primaryIssue}
                            onChange={this.handleInputChange} />
                    </label>
                    <div>Anything else we should know?</div>
                        <input
                            type="text"
                            onChange ={this.handleInputChange} />

                    <button type="submit">Submit</button>
            </div>
        );
    }
}

export default TherapySurvey;