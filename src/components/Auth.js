import React, { Component } from 'react';
import CreateAccount from './CreateAccount';

class Auth extends Component{
    render(){
        return(
            <div>
                <CreateAccount onAuthComplete={this.props.onAuthComplete}/>
            </div>
        );
    }
}

export default Auth;