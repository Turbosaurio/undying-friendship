import React from 'react'

import {NavLink} from 'react-router-dom'


const UIMenu = _ => {
	return(
		<nav>
			<NavLink to="/">Baby</NavLink>
			<NavLink to="/jesus">Jesus</NavLink>
		</nav>
	)
}

export default UIMenu