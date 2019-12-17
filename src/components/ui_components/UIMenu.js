import React from 'react'

import {NavLink} from 'react-router-dom'


const UIMenu = _ => {
	return(
		<nav aria-label="User Interface Navigation">
			<NavLink to="/">Test</NavLink>
			<NavLink to="/site">Site</NavLink>
		</nav>
	)
}

export default UIMenu