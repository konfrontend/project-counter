import React from 'react';
import { Link } from 'react-router-dom'
import API from './API'



const Single = ({match}) => {
	let totalTime = 0;
	const name = match.params.id;
	const project = API.get(name);
	const entries = Object.keys(project).map(function(groupKey, groupIndex) {
		// groups
		let rowTime = 0;

		const rowEntries = Object.keys(project[groupKey]).map(function (rowKey, rowIndex) {
			//rows
			const estimate = project[groupKey][rowKey].Planned;
			rowTime += estimate;
			
			return (
				<li key={rowIndex} className="list-group-item">
					{rowKey} <span className="badge">{estimate}</span>
				</li>
			)
			
		})
		totalTime += rowTime;

		return (
			<div key={groupIndex} className="panel-body">
				<h3>{groupKey} <span className="label label-info">{rowTime}</span></h3>
				<ul className="list-group">
					{rowEntries}
				</ul>
			</div>
			
		)
	})


	if(project) {
		return (
			<div className="container">
				<p className=""><Link to="/projects" className="btn btn-warning btn-lg" >Back</Link></p>
				
				<div className="project panel panel-default">
					
					<div className="panel-heading">
						<h2 className="">{name}</h2>
					</div>
					{entries}
					<div className="panel-footer"><h3>Total: <span className="label label-primary">{totalTime}</span></h3></div>
				</div>
			</div>
		)
	}

	else {
		return <div className="no-results">Not exists</div>
	}
}


export default Single;