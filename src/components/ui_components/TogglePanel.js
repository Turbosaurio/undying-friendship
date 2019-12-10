import React, {ReactNode, useState} from 'react'



const TogglePanel = ({children, initial}) => {
	const [status, toggleStatus] = useState(initial)
	function toggle(){
		toggleStatus(!status)
	}
	const title = status ? 'open' : 'closed'

	return(
		<div>
			<button title={title} onClick={toggle}>{title}</button>
			{status && children}
		</div>
	)
}

export default TogglePanel