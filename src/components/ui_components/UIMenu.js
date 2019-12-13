import React from 'react'

import {NavLink} from 'react-router-dom'


const UIMenu = _ => {
	return(
		<nav>
			<NavLink to="/">Test</NavLink>
			<NavLink to="/site">Site</NavLink>
		</nav>
	)
}

export default UIMenu