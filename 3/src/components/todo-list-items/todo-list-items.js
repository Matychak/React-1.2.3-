import React,{Component} from "react"
import "./index"
import "./todo-list-items.css"
import "../todo-list/todo-list"


//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

	// const style = {
	// 	color:important ? "red" : "black",
	// 	fontWidth:important ? "bold" : "normal"
	// }

export default class TodoListItems extends Component{

state = {
	done:false,
	main:false,
	
}
	onLabelClick = ()  => {
		this.setState(({done}) =>{
			return{
			done:!done
			}
		})
	}

	clickBtnMain = () => {
		this.setState(({main}) =>{
return{
	main:!main
}
		})
	}

render(){
const{label} = this.props;
const {done, main} = this.state;

let classNames = "todo-list-items ";

// checken if
if (done) {
	classNames+= "done "
}

if (main) {
	classNames+= "main "
}



		return(
		<span>
 <span  className = {classNames} onClick = {this.onLabelClick}>{label}</span>
<button className = "btn btn_main btn_from_li" onClick = {this.clickBtnMain}>

<FontAwesomeIcon icon={faExclamation} />

</button>

<button className = "btn btn_del btn_from_li" onClick = {this.props.onDeleted} >

<FontAwesomeIcon icon={faTrashAlt} />

</button>
		
		</span>
		) 
}
}
