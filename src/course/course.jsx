import React from 'react';
import {
	Card, 
	CardActions, 
	CardHeader, 
	CardMedia, 
	CardTitle, 
	CardText
} from 'material-ui/Card';

import userData from './../testdata.js';

export default class Course extends React.Component{
	render() {
		return(
			<Card>
				<CardTitle
					title={userData.course[this.props.params.id].label}
					subtitle={userData.course[this.props.params.id].title} />
				<CardText>
					{userData.course[this.props.params.id].text}
				</CardText>
			</Card>
		);
	}
}
