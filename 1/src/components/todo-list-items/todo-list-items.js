import React from "react"
import "./index"
import "./todo-list-items.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
const TodoListItems = ({label,important}) =>{
	// const(label,important) = props
	const style = {
		color:important ? "red" : "black",
		fontWidth:important ? "bold" : "normal"
	}
	return(
		<span>
<span style = {style} className = "todo-list-items">{label}</span>
<button className = "btn btn_main btn_from_li"><FontAwesomeIcon icon={faExclamation} /></button>
<button className = "btn btn_del btn_from_li"><FontAwesomeIcon icon={faTrashAlt} /></button>
		
		</span>
		) 
}
export default TodoListItems;