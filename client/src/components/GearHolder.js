import React from 'react'
import Card, {CardContent} from 'material-ui/Card';

const styles = {
    card: {
        margin: "15px"
    }
}

class GearHolder extends React.Component{

    render (){

        return(
            <p>
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
                    </CardContent>
                </Card>
            </p>
        );
    }
}

export default GearHolder;
