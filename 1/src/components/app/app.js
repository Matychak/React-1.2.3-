import React from 'react';

// Add parts components

import AppHeader from "../app-header/app-header"
import AppSearch from "../app-search/app-search"
import TodoList from "../todo-list/todo-list"
import ItemsStatusFilter from "../items-status-filter"
import AddItems from "../add-items/add-items"

import "./app.css"
import "./index"


const AppAll = () =>{
const todoList = [
{label:"Drink Coffee", important: false, id:1},
{label:"Build React App", important: false, id:2},
{label:"Drink Tea", important: false, id:3},

]

	return (
	<div className = "todo-app">
	<AppHeader toDo = {1} done = {3}/>

	<div className = "top-panel d-flex">

<AppSearch />
  	<ItemsStatusFilter />


	</div>

 <TodoList todos = {todoList}/> 

 <AddItems />
	</div>
		)
}

export default AppAll;