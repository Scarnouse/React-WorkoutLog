import React, { Component } from 'react';

class Signing extends Component {    
    render() {
        return (
            <header id="header">
            </header>
            <div className="main">
                <label htmlFor="username">Usuario
                    <input type="text" id="username" />
                </label>
                <label htmlFor="password">Contraseña
                    <input type="password" id="password" />
                </label>
                <button 
                    id="signIn" 
                    onClick={this.props.onAuthComplete.bind(null, this._doAuth)}
                >Entrar</button>
            </div>
        );
    }

    _doAuth() {
        return true;
    }
}

export default Signing;