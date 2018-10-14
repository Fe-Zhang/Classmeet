import React, { Component } from 'react';
import '@src/theme.css'


export default class Welcome extends Component {
	render(){
		return(
            <div className="second-part">           
                <div className="welcome-message">HEY THERE,</div>
                <div className="bottom-welcome-message">Click on the find button on the left to get matched with other
                                            classmates, start a chat, and create study groups.<br/>You can 
                                            continue a chat, or edit your settings.</div>

            </div>

        );
    }   

}
