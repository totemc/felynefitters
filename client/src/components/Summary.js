import React from 'react'
import Card, { CardContent } from 'material-ui/Card'

const styles = {
	card: {
		margin: "15px",
		height: "100%"
	}
}

class Summary extends React.Component{

	render() {
		return (
			<Card style={styles.card} >
				<CardContent>
					Summary of selected gear
				</CardContent>
			</Card>
		)
	}

}
export default Summary;
