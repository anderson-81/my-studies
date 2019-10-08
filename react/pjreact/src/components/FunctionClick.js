import React, { Component } from 'react'

export class FunctionClick extends Component {

    /*
    showMessageName(name) {
        alert("Hello, " + name + "!")
    }
    */

    render() {

        const showMessage = () => {
            alert("Hello, World!")
        }

        return (
            <div>
                <h1>Function CLICK</h1>
                <button onClick={ showMessage }>FUNCTION!</button>
            </div>
        )

        //<button onClick={ this.showMessageName('Anderson') }>FUNCTION!</button>
    }
}

export default FunctionClick
