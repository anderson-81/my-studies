import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import Box from './Box'
import './style.css'

class Parameter extends Component{
	render(){
		return (
			<div>
				<Message name='Anderson'/> 
				<Box title="Title Box" class="h1-title" text="hgasgdfasgds">
				</Box>
			</div>

		)
	}
}

export default Parameter;