import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Greet from './Greet'

class Joined extends Component{
	render(){
		return (
			<div>
				<App/> <Greet/>
			</div>
		)
	}
}

export default Joined;