import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import GoogleLogin from 'react-google-login';
import Home from "./Home";
import '@src/theme.css'

export default class Main extends Component {
    constructor () {
        super()
        this.state = {
            isSignedIn: false
        }
    }
    setSignedInState (bool) {
        this.setState({
            isSignedIn: bool
        })
    }
    render(){
        if (this.state.isSignedIn) {
            return (
                <Home/>
            );
        }
        else {
            return (
                    <div >
                     <div className="landing-body">
                        <div className="landing-header">
                            <p>CLASS MEET</p>      
                        </div>
                        <div className="landing-body-font">
                            <p>Join. Collaborate. Study.</p>
                        </div>
                    </div>
                    SIGN IN
                    <GoogleLogin
                        clientId="97360663308-867fbuu9h0qsssal11rhv8l254iug859.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.setSignedInState.bind(this, true)}
                        onFailure={this.setSignedInState.bind(this, false)}
                    />
                </div>
            );
        }
    }
} 