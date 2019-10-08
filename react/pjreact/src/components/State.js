import React, { Component } from 'react'

class State extends Component{

	constructor(){
		super()
		this.state = {  text: 'Hello, State!' }
	}

	changeMessage(){
		this.setState({
			text: 'Bye, State!'
		})
		alert('changed!')
	}

	render(){
		console.log(this.state.text)
		return (
			<div>
				<h1> { this.state.text } </h1>
				<button type="button" onClick={ () => this.changeMessage() }>
					CLICK!!!
				</button>
			</div>
		)
	}
}

export default State;