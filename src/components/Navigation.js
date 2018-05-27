import React, { Component } from 'react';

import '../styles/main.css';

class Navigation extends Component{
    render(){
        return(
            <nav id="nav">
                <ul className="links">
                    <li>
                        <a 
                            onClick={this.props.onNav.bind(null, this._nav("define"))}
                        >Define un entrenamiento
                        </a>
                    </li>
                    <li>
                        <a 
                            onClick={this.props.onNav.bind(null, this._nav("store"))}
                        >Guardar un entrenamiento
                        </a>
                    </li>
                    <li>
                        <a 
                            onClick={this.props.onNav.bind(null, this._nav("history"))}
                        >Ver historial
                        </a>
                    </li>
                    <li>
                        <a 
                            onClick={this.props.onLogOut}
                        >Cerrar sesión
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }

    _nav(view) {
        return view
    }
}

export default Navigation;