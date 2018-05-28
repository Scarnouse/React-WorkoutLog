import React, { Component } from 'react';
import './styles/App.css';

import Authentication from './components/Auth';
import WorkoutLog from './components/WorkoutLog';

class App extends Component {
  constructor(){
    super();
    this.state = {
      signedIn: false
    }

    this._onAuthComplete = this._onAuthComplete.bind(this);
    this._onLogout = this._onLogout.bind(this);
  }

  render() {
    return (
      <div className="fade-in">
        {this.state.signedIn ? 
          <WorkoutLog onLogout={ this._onLogout } /> :
          <Authentication onAuthComplete={ this._onAuthComplete }/>
        }
      </div>
    );
  }

  _onAuthComplete(result) {
    // let the child auth components control behavior here
    if(result){
      this.setState({ signedIn: true });
    }
  }

  _onLogout() {
    this.setState({ signedIn : false });
  }
}

export default App;
