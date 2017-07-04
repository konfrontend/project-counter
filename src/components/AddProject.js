import React, { Component } from 'react';
import update from 'immutability-helper';

class AddProject extends Component {


	constructor(props) {
		super(props);
		this.state = {
			name: '',
			group: [{
				name: '',
				fields: [{
					name:'', 
					estimate: ''
				}]
			}]
		}
		this.onAddGroup = this.onAddGroup.bind(this)
		this.onAddRow = this.onAddRow.bind(this)
		this.onRemoveRow = this.onRemoveRow.bind(this)
	}
	onAddGroup() {
		this.setState({
			group: this.state.group.concat([{name: '', fields: [{ name:'', estimate:''}]}])
		})
	}
	onAddRow = (index) => () => {
		const group = this.state.group;
		const row = update(group[index], {
			fields: {$push: [{ name:'', estimate: ''}]}
		})
		group[index] = row;
		this.setState({
			group: group
		})
		
	}
	onRemoveRow = (index, rowIndex) => () => {
		// const group = this.state.group;

		// console.log(group[index].fields);
		// console.log(group[index].fields[rowIndex]);
		// // group[index].fields.splice(rowIndex, 1);
		// // const change = group[index].fields.splice(rowIndex, 1);
		// let change = [];
		// change = { $splice: [[rowIndex, 1]]};

		// console.log(group[index].fields[rowIndex]);
		

		this.setState({
			group: update( this.state.group[index], {
				 fields: { $splice: [[rowIndex, 1]]}
			})
		})
		// console.log(this.state);
		// const row = this.state.group[index].fields.filter(function (item) {
		// 	console.log(item);
		// 	return item != rowIndex
		// })

		// group[index].fields = row;
		// this.setState({
		// 	group: group
		// })
		// group[index].fields[rowIndex] = null

		// this.setState({
		// 	group: group
		// })
		// console.log(this.state);
	}

	render() {
		return (
			<div className="container">
				<form action="" className="">
					<div className="row">
						<div className="col-sm-6 form-group">
							<input type="text" className="form-control" placeholder="Project Name" />
						</div>
					</div>
						{this.state.group.map( (group, index) => {
							return(
								<div key={index} className="row">
									<div className="col-sm-12 form-group">
										<input type="text" className="form-control" placeholder="Group name"/>
									</div>

									{group.fields.map( (row, rowIndex) => {
										return(
											<div key={rowIndex} className="col-sm-12 form-group">
												<div className="col-sm-8 ">
													<input type="text" className="form-control" placeholder={rowIndex}/>
														
												</div>
												<div className="col-sm-2 ">
														
														<input type="text" className="form-control" placeholder="Estimate"/>
												</div>
												<div className="col-sm-2 ">
													<button type="button" className="btn btn-danger" onClick={this.onRemoveRow(index, rowIndex)} >Remove </button>
												</div>
											</div>
											
										)
									})}
									
									<div className="col-sm-12 form-group">
										<button type="button" className="btn btn-success" onClick={this.onAddRow(index)} >Add Row</button>
									</div>
								</div>
							)
								
						})}
						
						
						
						<div className="form-group">
							<button type="button" className="btn btn-primary" onClick={this.onAddGroup}>Add Group</button>
						</div>

				</form>
			</div>
		)
	}
}


export default AddProject;

