import React, { Component } from 'react';
import GearController from './GearController.js';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import green from 'material-ui/colors/green';
import { armor } from '../../data/armor.json';
import ArmorTransformer from '../ArmorTransformer.js';

const green500 = green[500];

const api = new ArmorTransformer(armor);

class App extends Component{

    constructor(){
        super();
        this.state = {
            headGear: api.getHead()
        };
        console.log(this.state.headGear);
    }

    render() {
        return (
            <div>
                <AppBar className="flexgrow">
                    <ToolBar style={{backgroundColor: green500 }}>
                        <Typography variant="title" color="inherit">
                            Felyne Fitters
                        </Typography>
                    </ToolBar>
                </AppBar>
                <div style={{marginTop: '64px'}}>
                    <GearController gear={this.state.headGear}/>
                </div>
            </div>
        );
    }
}

export default App;
