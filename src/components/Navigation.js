import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import logo from '../logo.svg';


class Navigation extends Component  {

	render() {
		return (
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div className="container">
					<nav className="navbar navbar-default">
						<ul className="nav navbar-nav ">
							<ListItem activeOnlyWhenExact={true} to="/" label="Home" />
							<ListItem to="/projects" label="Projects"/>
							<ListItem to="/add" label="Add New"/>
						</ul>
					</nav>
				</div>
			</div>
		)
	}
}

// https://reacttraining.com/react-router/web/example/custom-link
 
const ListItem = ({label, to, activeOnlyWhenExact}) => (
	<Route path={to} exact={activeOnlyWhenExact} children={ ({ match }) => (
		<li to={to} className={match ? 'active' : ''}> 
			<Link to={to}>{label}</Link>
		</li>
	)}/>
)

export default Navigation;
