import React from "react";

export default class Contador extends React.Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		};
	}

	increment() {
		this.setState({ counter: this.state.counter + 1 });
	}

	decrement() {
		this.setState({ counter: this.state.counter - 1 });
	}

	// <!-- bind, executar o metodo com o contexto do objeto -->

	render() {
		return (
			<div>
				<h1>{this.state.counter}</h1>
				<div>
					<button onClick={this.decrement.bind(this)}>-</button>
					<button onClick={this.increment.bind(this)}>+</button>
				</div>
			</div>
		);
	}
}