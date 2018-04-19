import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';

const styles = {
    card: {
        margin: '15px',
        backgroundColor: "white"
    }
};

class GearHolder extends Component{
    render() {
        return (
            <div>
                <Card style={styles.card}>
                    <CardContent>
                        Strange
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
                        Waist
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default GearHolder;
