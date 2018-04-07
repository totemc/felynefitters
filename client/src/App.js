import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GearController from './components/GearController.js';
import GearHolder from './components/GearHolder.js';
import Summary from './components/Summary.js';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GearHolder/>
        <Summary/>
        <GearController/>


      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
