import React from "react";

import BotaoGol from "./BotaoGol";

export default class Time extends React.Component {
	render() {
		return(
			<div>
				<h3>{this.props.time}</h3>
				<h1>{this.props.gols}</h1>
				<BotaoGol marcarGol={this.props.marcarGol} />
			</div>
		);
	}
}