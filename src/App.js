import React, { Component } from 'react';
import './App.css';

import RegistrationPage from './scenes/register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ejercicio Intive</h1>
          <h5>Guillermo Eyherabide</h5>
        </header>
        <div>
          <RegistrationPage />          
        </div>
      </div>
    );
  }
}

export default App;
