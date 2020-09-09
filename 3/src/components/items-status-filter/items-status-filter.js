import React, {Component} from "react";

import "./items-status-filter.css"
import "./index"

export default class ItemsStatusFilter extends Component{
	render(){
			return(
	<div className = "btn-group">
	<button className = "btn btn-outline-info all_btn">All</button>	
	<button className = "btn btn-outline-secondary">Active</button>
	<button className ="btn btn-outline-secondary">Done</button>
	</div>
	)
}
	}

