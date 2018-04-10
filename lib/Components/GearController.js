import React, { Component } from 'react';
import GearHolder from './GearHolder';
import Summary from './Summary';

import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
    card: {
        margin: '15px'
    }
};

class GearController extends Component {
    state = {
        expanded : false
    }

    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render(){
        return (
            <Grid container spacing={24}>
                <Grid item lg={4}>
                    <GearHolder/>
                </Grid>
                <Grid item lg={4}>
                    <Summary/>
                </Grid>
                <Grid item lg={4}>
                    <Card style={styles.card}>
                        <CardContent>
                            Head
                        </CardContent>
                    </Card>
                    <Card style={styles.card}>
                        <CardContent>
                            Chest
                        </CardContent>
                    </Card>
                    <Card style={styles.card}>
                        <CardContent>
                            Hand
                        </CardContent>
                    </Card>
                    <Card style={styles.card}>
                        <CardContent>
                            Waist
                        </CardContent>
                    </Card>
                    <Card style={styles.card}>
                        <CardContent>
                            Feet
                            <IconButton onClick={this.handleExpandClick}>
                                <ExpandMoreIcon/>
                            </IconButton>
                        </CardContent>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                PlaceHolderText
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default GearController;
