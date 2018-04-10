import React, { Component } from 'react';
import GearController from './GearController.js';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import green from 'material-ui/colors/green';
import { armor } from '../../data/armor.json';
import ArmorSorter from '../ArmorSorter.js';

const green500 = green[500];

const api = new ArmorSorter(armor);

class App extends Component{

    constructor(){
        super();
        this.state = {
            headGear: api.getHeadData(),
            chestGear: api.getChestData(),
            gloveGear: api.getGloveData(),
            waistGear: api.getWaistData(),
            legGear: api.getLegData()

        };
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
