import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import '@src/theme.css'
import Redirect from 'react-router-dom/Redirect';
import Main from './Main';

const logout = () => {
    console.log('logout');
    <Redirect to="/" />
  }

export default class Home extends Component {
    render(){
        return (
            <div >
                HOME PAGE
                <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                    >
                </GoogleLogout>
            </div>
        );
    }
} 
