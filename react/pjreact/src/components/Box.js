import React, { Component } from 'react'

const Box = props => {
	return (
		<div class={props.class}>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</div>
	)
}

export default Box

