import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import API from './API'

class List extends Component {
	
	render() {
		const items = Object.keys(API.all()).map(function(key, index) {
			return <li key={index} className="project-list__item list-group-item"><Link to={`/projects/${key}`}>{key}</Link></li>
		})
		return (
			<div className="container">
				<p className=""><Link to="/add" className="btn btn-success btn-lg" >Add New</Link></p>
				<ul className="project-list list-group">
					{items}
				</ul>
			</div>
		);
	}
}

export default List;
