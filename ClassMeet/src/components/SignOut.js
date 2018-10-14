import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <div
    className="nav-link-signout"
    onClick={auth.doSignOut}
  >
    SIGN OUT
  </div>

export default SignOutButton;