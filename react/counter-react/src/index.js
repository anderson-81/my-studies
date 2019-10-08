import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
	<h1>Hello, World!</h1>,
	document.getElementById('render')
)

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

