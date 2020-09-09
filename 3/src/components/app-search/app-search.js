import React,{Component} from 'react';
import "./index"
import "./app-search.css"

export default class AppSearch extends Component{
	render(){
	const text = "type to search"
	return(
		
<input type = "text" className = "search_panel" placeholder = {text} />

		)
}
}
