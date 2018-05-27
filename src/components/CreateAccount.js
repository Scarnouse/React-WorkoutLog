import React, { Component } from 'react';

import '../styles/main.css';

class CreateAccount extends Component {
    render(){
        return(
            <div className="fade-in">
                <div id="main">
                    <section>
                        <div className="field">
                            <label 
                                htmlFor="username"
                                className="">Usuario:
                                <input type="text" id="username" />
                            </label>
                        </div>
                        <label 
                            htmlFor="password"
                            className="">Contraseña:
                            <input type="password" id="password" />
                        </label>
                        <label 
                            htmlFor="confpassword"
                            className="">Confirmar contraseña:
                            <input type="password" id="confpassword" />
                        </label>
                        <button 
                            id="signIn"
                            onClick={this.props.onAuthComplete.bind(null, this._createAccount)}
                            className=""
                        >Crear cuenta
                        </button>
                    </section>
                </div>
            </div>
        );
    }

    _createAccount() {
        // do creation logic here
        return true;
    }
}

export default CreateAccount;