import collection from '../db.json'

const API = {
	projects: collection.projects,
	all: function () {
		return this.projects
	},
	get: function (id) {
		if( this.projects[id] ) {
			return this.projects[id]
		}
	}
}
export default API