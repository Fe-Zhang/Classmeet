import React from 'react';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import '@src/theme.css'


const Landing = () =>
<div className="landing-body">
  <div className="landing-wrapper">
    <div className="landing-header">
      CLASSMEET   
    </div>
    <div className="landing-body-font">
        Join. Collaborate. Study.
    </div>
    <div className="landing-body-font">
      <Link to={routes.SIGN_IN}>
        <button className="signin-button" type="button">
          Sign In
        </button>
      </Link>
    </div>
  </div>
</div>

export default Landing;