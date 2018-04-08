import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GearController from './components/GearController.js';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import green from 'material-ui/colors/green';

const green500 = green[500];
class App extends Component {
  render() {
    return (
        <div>
          <AppBar className="flexgrow">
            <ToolBar style={{ backgroundColor: green500 }}>
              <Typography variant="title" color="inherit" >
                Felyne Fitters
              </Typography>
            </ToolBar>
          </AppBar>
          <div style={{ marginTop: "64px" }}>        
            <GearController/>
          </div>
        </div>
    );
  }
}

export default App;
