import React from 'react';
import "./index"
import "./app-search.css"


const AppSearch = () =>{
	const text = "type to search"
	return(
		
<input type = "text" className = "search_panel" placeholder = {text} />

		)
}
export default AppSearch;