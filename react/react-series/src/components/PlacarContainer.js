import React from "react";

import Partida from './Partida';
import Time from './Time';

export default class PlacarContainer extends React.Component {
	
	constructor(){
		super();
		this.state = {
			gols_casa: 0,
			gols_visitate: 0
		};
	}

	marcarGolCasa(){
		this.setState({gols_casa: this.state.gols_casa + 1});
	}

	marcarGolVisitante(){
		this.setState({gols_visitate: this.state.gols_visitate + 1});
	}




	render() {

		const { partida, casa, visitante } = this.props;

		// posso criar variavel com estilo do componente.
		
		return(
			<div>
				<div>
					<Time time={casa.time} gols={this.state.gols_casa} marcarGol={this.marcarGolCasa.bind(this)} />
				</div>
				<div>
					<Partida  { ...partida } tempo={47} />
					<h4>{this.props.clima}</h4>
				</div>
				<div>
					<Time time={visitante.time} gols={this.state.gols_visitate} marcarGol={this.marcarGolVisitante.bind(this)} />
				</div>
			</div>
		);
	}
}


// Trabalhando com propType:

PlacarContainer.protoTypes = {
	clima: React.PropTypes.string,
	tempo: React.PropTypes.number.isRequired,
}

PlacarContainer.defaultProps = {
	clima: 'Ensolarado'
}

PlacarContainer.defaultProps = {
	clima: 'Ensolarado'
}