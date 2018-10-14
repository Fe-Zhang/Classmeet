import React, {Component} from 'react';
import withAuthorization from './withAuthorization';
import SignOutButton from './SignOut'
import { auth } from '../firebase/firebase'

import Welcome from './Welcome';
import Find from './Find';
import Edit from './Edit';
import Chat from './Chat';
import Classes from './Classes';

class Home extends Component {
  constructor() {
    super() 
    this.state = {
      page: 'welcome'
    }
  }
  changeState (state) {
    this.setState({
      page: state
    })
  }
  render () {
    return (
      <div>
      <div className="navigation-bar">
         <img className="user-photo"></img>
         <div >
             <div className="nav-link" onClick={this.changeState.bind(this, 'find')}>FIND</div>
             <div className="nav-link" onClick={this.changeState.bind(this, 'classes')}>CLASSES</div>
             <div className="nav-link" onClick={this.changeState.bind(this, 'chat')}>CHAT</div>
             <div className="nav-link" onClick={this.changeState.bind(this, 'edit')}>PROFILE</div>
             <SignOutButton/> 
          </div>
           
      </div>
      
      {this.state.page == 'welcome' && <Welcome email={auth.currentUser.email}/>}
      {this.state.page == 'find' && <Find/>}
      {this.state.page == 'classes' && <Classes/>}
      {this.state.page == 'edit' && <Edit/>}
      {this.state.page == 'chat' && <Chat/>}
        

      </div>
    );
  }
}



const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);