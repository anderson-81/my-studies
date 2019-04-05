// Crio esse arquivo somente uma vez.
// Boostrap da aplicação.
// Root component.

import React from "react";
import ReactDOM from "react-dom";
/*
ReactDOM.render(
	<h1>Hello, World!</h1>,
	document.getElementById("app")
);
*/

// Importando o componente:
import App from "./components/App";

// Renderizando o componente:
ReactDOM.render(<App />, document.getElementById("app"));