import React, { Component } from 'react';
import '@src/theme.css'

export default class ClassDetail extends Component {
    constructor() {
        super();
        this.state = {
            people: [ 'Felix','Nina','Will' ],
        }
    }
    buildOptions() {
        var arr = [];

        for (let i = 0; i <= this.state.people.length - 1; i++) {
            arr.push(<li key={i} value="{i}">{this.state.people[i]}</li>)
        }

        return arr; 
    }
	render(){
		return(
            <div className="second-part">           
                <div className="welcome-message"> {this.props.courseID} </div>
                <div className="bottom-welcome-message"> These are your classmates taking {this.props.courseID}! </div>
                <ul className="student-list">
                    {this.buildOptions()}
                </ul>
            </div>

        );
    }   

}
