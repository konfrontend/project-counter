import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Projects from './Projects'
import AddProject from './AddProject'

class Main extends Component {
	
	render() {
		return (
			<main className="jumbotron">
				<Route path='/projects' component={Projects}/>
				<Route path='/add' component={AddProject}/>
			</main>
		);
	}
}

export default Main;
