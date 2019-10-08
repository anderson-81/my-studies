import React from 'react'
import './style.css';

const CreateComponent = () => {
	return React.createElement('div', null, 
		React.createElement('h1', { id : 'hello', className: 'hello-class' }, 
			'Hello, World!'))
}

export default CreateComponent