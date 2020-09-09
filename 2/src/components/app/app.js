import React from 'react';
import AppHeader from "../app-header/app-header"
import AppSearch from "../app-search/app-search"
import TodoList from "../todo-list/todo-list"
import "./index";
const AppAll = () =>{


	return (
	<div>
	<AppHeader />
  	<AppSearch />
 <TodoList /> 
	</div>
		)
}

export default AppAll;