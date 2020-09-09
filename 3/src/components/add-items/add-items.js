import React,{Component} from 'react';

import "./add-items.css";

import "./index"
export default class AddItems extends Component{
	render(){


	const textInput = "What needs to be done";
	const textBtn = "Add item"
	return(
<div>
<input type = "text" className = "add-panel " placeholder = {textInput} />
<button className = "btn-outline-secondary btn-panel	">{textBtn}</button>
</div>
		)
}
}
