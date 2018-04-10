import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';

const styles = {
    card: {
        margin: '15px'
    }
};

class GearHolder extends Component{
    render() {
        return (
            <div>
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
                        Waist
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default GearHolder;
