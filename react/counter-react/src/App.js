import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Counter from './Counter'

/*
ReactDOM.render(
	<h1>Hello, World!</h1>,
	document.getElementById('app')
)
*/

class App extends Component{

	constructor(){
		super()
	}

	render(){
		// return <h1>Hello, App!</h1>

		return (
			<div>
				<Counter />
			</div>
		)
	}
}

export default App