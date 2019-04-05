import React from "react";

// Importando o contador
// import Contador from './Contador';

import PlacarContainer from "./PlacarContainer";

const dados = {
	partida: {
		estadio: "Maracanã",
		data: "01/03/2019",
		horario: "19h"
	},
	casa: {
		time: "Flamengo"
	},
	visitante: {
		time: "Barcelona"
	}
};

// Criando uma classe extendendo
// React.Component
// Observar as exportação da classe.
export default class App extends React.Component {
	// Metodo obrigatorio pra saber
	// o que renderizar:
	render() {
		// return <h1>Hello, React!</h1>;
		// Retornando componente contador agora.
		/*
		return (
			<Contador />
		);
		*/

		// Passando const para o componente.
		/*
		return <PlacarContainer 
			partida={dados.partida}
			casa={dados.casa}
			visitante={dados.visitante}
		/>;
		*/

		return <PlacarContainer 
			{...dados}
		/>;
	}
}