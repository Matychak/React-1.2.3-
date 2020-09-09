import React,{Component} from 'react';


// Add parts components

import AppHeader from "../app-header";
import AppSearch from "../app-search";
import TodoList from "../todo-list";
import ItemsStatusFilter from "../items-status-filter";
import AddItems from "../add-items";
import "./index"
import "./app.css";





export default class AppAll extends Component{

state = {
	todoList:[
{label:"Drink Coffee", important: false, id:1},
{label:"Build React App", important: false, id:2},
{label:"Drink Tea", important: false, id:3},

]
}
deleteItem = (id) =>{
this.setState(({todoList}) =>{
const indexElement = todoList.findIndex((el) => el.id === id)
const left = todoList.slice(0, indexElement)
const right = todoList.slice(indexElement + 1)
const newArray = [...left, ...right];
return {
	todoList: newArray
}
})
}
	render(){
		return (
	<div className = "todo-app">
	<AppHeader toDo = {1} done = {3}/>

	<div className = "top-panel d-flex">

<AppSearch />
  	<ItemsStatusFilter />


	</div>

 <TodoList todos = {this.state.todoList} onDeleted = {this.deleteItem}/> 

 <AddItems />
	</div>
		)
}
}
	
