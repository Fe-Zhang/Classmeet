import React, { Component } from 'react';
import '@src/theme.css'
import ClassDetail from './ClassDetail'

export default class Classes extends Component {
    constructor() {
        super();
        this.state = {
            classes: [ 'CS31', 'CS33', 'CS111' ],
            selectedclass: 'CS31',
            showclass: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.backtofind = this.backtofind.bind(this);
    }
    handleChange(event) {
        this.setState({selectedclass: event.target.value});
      }
    
    handleSubmit(event) {
        this.setState({showclass: true});
    }
    backtofind(event) {
        this.setState({showclass: false});
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
            <div>
            {!this.state.showclass && (
                <div className="second-part">           
                    <div className="welcome-message">MY CLASSES</div>
                    <div className="bottom-welcome-message"> Select a class to discover fellow classmates! </div>
                    <div>
                        <select className="find-classes-selector"
                                value={this.state.selectedclass} 
                                onChange={this.handleChange}>
                            {this.buildOptions()}
                        </select>
                        <button className="find-button" onClick={this.handleSubmit}> GO </button>
                    </div>
                </div>
            )}
            {this.state.showclass && (
                <div>
                    <ClassDetail courseID={this.state.selectedclass} />
                    <button className="back-to-find" onClick={this.backtofind}> BACK </button>
                </div>
            )}
            </div>
        );
    }   

}

