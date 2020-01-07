import React from 'react'

import {rowStyles} from '../../jss/site'


const Row = ({rowSpacing, children, showTitle, title, constrain}) =>{
	const jss = rowStyles({rowSpacing})
	return(
		<div className={`${jss.row} ${jss.row_padded}`}>
			<h2 className={`${jss.row_title} ${!showTitle && jss.hidden_header}`}>{title}</h2>
			<div className={`${jss.row_inner} ${constrain && jss.row_inner_constrain}`}>
				{children}
			</div>
		</div>
	)
}

export default Row