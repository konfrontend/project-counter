import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Single from './Single'
import List from './List'


class Projects extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/projects" component={List}/>
				<Route path="/projects/:id" component={Single} />
			</Switch>
		);
	}
}




export default Projects;
