import React, { Component } from 'react';

class App extends Component{

    constructor(){
        super();
    }
    
    render(){
    	const message = "Hello, World!"
        return <h1>{ message }</h1>
    }
}

export default App