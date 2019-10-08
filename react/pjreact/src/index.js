import React from 'react'
import ReactDOM from 'react-dom'

/* My Components */
import Greet from './components/Greet'
import App from './components/App'
import Joined from './components/Joined'
import Hook from './components/Hook'
import CreateComponent from './components/CreateComponent'
import Parameter from './components/Parameter'
import State from './components/State'
import Test from './components/Test'
import FunctionClick from './components/FunctionClick'

/* Renders */
ReactDOM.render(<Greet />, document.getElementById("greet"))
ReactDOM.render(<App />, document.getElementById("app"))
ReactDOM.render(<Joined />, document.getElementById("joined"))
ReactDOM.render(<Hook />, document.getElementById("hook"))
ReactDOM.render(<CreateComponent />, document.getElementById("create"))
ReactDOM.render(<Parameter />, document.getElementById("parameter"))
ReactDOM.render(<State />, document.getElementById("state"))
ReactDOM.render(<Test />, document.getElementById("test"))
ReactDOM.render(<FunctionClick />, document.getElementById("function"))
