import React, {ReactNode, useState} from 'react'

import {ui_styles} from '../../jss/ui'

const TogglePanel = ({children, initial}) => {
	const [status, toggleStatus] = useState(initial)
	function toggle(){
		toggleStatus(!status)
	}
	const title = status ? 'open' : 'closed'
	const classes = ui_styles()

	return(
		<div>
			<button className={`${classes.toggleButton} ${title}`} title={title} onClick={toggle}>{title}</button>
			{status && children}
		</div>
	)
}

export default TogglePanel