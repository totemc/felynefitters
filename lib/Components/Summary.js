import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';

const styles = {
    card: {
        margin: '15px',
        height: '100%'
    }
};

class Summary extends Component{
    render() {
        return (
            <Card style={styles.card}>
                <CardContent>
                        Hello there! what happened to my font?
                </CardContent>
            </Card>
        );
    }
}

export default Summary;
