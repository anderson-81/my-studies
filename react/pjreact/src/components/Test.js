// rce
import React, { Component } from 'react'

export class Test extends Component {

    // rconst
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello, World!',
             counter: 0
        }
    }

    increment(){
        this.setState({
            counter: this.state.counter + 1 
        }, () => {
            console.log('console: ', this.state.counter)
        })
    }

    // DON'T WORK !!!
    incrementThree(){
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1> { this.state.message } </h1>
                <h1> INCREMENT: { this.state.counter } </h1>
                <button type="button" onClick={() => this.increment()}>INCREMENT</button>
                <button type="button" onClick={() => this.incrementThree()}>INCREMENT THREE</button>
            </div>
        )
    }
}

export default Test
