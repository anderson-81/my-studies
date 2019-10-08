import React from 'react';

const Message = props => {
	console.log(props)
	//props.attribute = "hgsdfahgdasfd" //ERROR!!!
	return <h1 class={props.style}>Hello, { props.name }! </h1>
}

export default Message