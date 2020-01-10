import React, {Fragment} from 'react'

const Column = ({columnSettings, children}) => {
	return(
		<div {...columnSettings}>
			{children}
		</div>
	)
}

export default Column