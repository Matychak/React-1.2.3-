import React from 'react';

import "./add-items.css";

import "./index"
const AddItems = () =>{
	const textInput = "What needs to be done";
	const textBtn = "Add item"
	return(
<div>
<input type = "text" className = "add-panel" placeholder = {textInput} />
<button className = "btn-outline-secondary btn-panel	">{textBtn}</button>
</div>
		)
}

export default AddItems; 