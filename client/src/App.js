import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GearController from './components/GearController.js';
import AppBar from 'material-ui/AppBar';
import {green500} from 'material-ui/styles/colors';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <AppBar title="Felyne Fitters" style={{"backgroundColor" : green500}} titleStyle={{"textAlign":"center"}} iconClassNameLeft="none"/>
          <GearController/>
      </MuiThemeProvider>
    );
  }
}

export default App;
