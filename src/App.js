import React, { Component } from 'react'

import Main from './components/Main'
import Navigation from './components/Navigation'

class App extends Component {


	render() {
		return (
			<div className="App ">
				<Navigation/>
				<Main/>
			</div>	
		)
	}
}

export default App;
