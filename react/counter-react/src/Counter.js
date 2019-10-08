import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component{

	constructor(){
		super()
		this.state = {
			counter : 0
		}
	}

	increment(){
		this.setState({
			counter: this.state.counter + 1
		})
	}

	decrement(){
		this.setState({
			counter: this.state.counter - 1
		})
	}

	render(){
		return (
			<div>
				<h1>{ this.state.counter }</h1>
				<div>
					<button onClick={ () => this.decrement() }>-</button>
					<button onClick={ this.increment.bind(this) }>+</button>
				</div>
			</div>
		);
	}
}

export default Counter