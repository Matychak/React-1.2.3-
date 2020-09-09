import React from 'react';
import TodoListItems from "../todo-list-items"
import "./index"
import "./todo-list.css"
const TodoList = () =>{
	// const items = ["Items 1","Item 2","Item 3"];
return(
	<ul className="list-group todo-list">
	<li className = "list-group-item style"><TodoListItems /></li>
	<li className = "list-group-item style"><TodoListItems /></li>
	<li className = "list-group-item style"><TodoListItems /></li>
	</ul>
	)
}
export default TodoList;