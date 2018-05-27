import React, { Component } from 'react';

import Nav from './Navigation';
import DefineWorkout from './Define';
import StoreWorkout from './Store';
import History from './History';

class WorkoutLog extends Component{
    constructor(){
        super();
        this.state = {
            view: "define"
        }

        this._onNav = this._onNav.bind(this);
    }

    render() {
        let selectedTab = this.state.view;
        let paintedView = null;

        switch(selectedTab) {
            case "define":
                paintedView = <DefineWorkout />
                break;
            case "store":
                paintedView = <StoreWorkout />
                break;
            case "history":
                paintedView = <History />
                break;
            default:
                // nothing to do

        }


        return(
            <div className="fade-in">
                <header id="header">
                    <h2>Registro de entrenamiento</h2>
                </header>
                <Nav 
                    onLogout={this.props.onLogout}
                    onNav={this._onNav}
                />
                <div id="main">
                    { paintedView }
                </div>
            </div>
        );
    }

    _onNav(theView) {
        this.setState({ view: theView })
    }
}

export default WorkoutLog;