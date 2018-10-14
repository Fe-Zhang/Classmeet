import React, { Component } from 'react';
import '@src/theme.css'
import ClassDetail from './ClassDetail'
import { string } from 'prop-types';

export default class Find extends Component {
    constructor() {
        super();
        this.state = {
            classes: [],
            selectedclass: 'CS31',
            showclass: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.inputclasses = this.inputclasses.bind(this);
    }
    handleChange(event) {
        this.setState({selectedclass: event.target.value});
    }
    inputclasses(keys) {
        this.setState ( {
            classes: keys
        })
    }
    componentWillMount() {
        var keys;
        fetch('http://test-sdhacks.appspot.com/classes/5')
        .then((response) => response.json())
        .then((data) => {
            keys = Object.keys(data);
            console.log(keys);
            this.inputclasses(keys);
        })
        .catch((error) => {
            console.error(error);
        });
       
    }
    addclasstoaccount() {
        console.log(this.state.selectedclass);
    }
    buildOptions() {
        var arr = [];

        for (let i = 0; i <= this.state.classes.length - 1; i++) {
            arr.push(<option key={i} selectedclass="{i}">{this.state.classes[i]}</option>)
        }

        return arr; 
    }
	render(){
		return(
            <div className="second-part">           
                <div className="welcome-message">FIND</div>
                    <div className="bottom-welcome-message"> Find new classmates! Select a class below. </div>
                     <div>
                        <select size="1" className="find-classes-selector"
                            value={this.state.selectedclass} 
                            onChange={this.handleChange}>
                        {this.buildOptions()}
                    </select>
                    <button onClick={this.addclasstoaccount} className="find-button"> ADD </button>
                </div>
            </div>
        );
    }   

}

