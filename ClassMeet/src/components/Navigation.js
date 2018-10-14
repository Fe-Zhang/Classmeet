import React from 'react';


import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import Landing from './Landing';
import * as routes from '../constants/routes';
import Redirect from 'react-router-dom/Redirect';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <Redirect to={routes.HOME} ></Redirect>

const NavigationNonAuth = () =>
    <Redirect to={routes.LANDING} ></Redirect>

export default Navigation;