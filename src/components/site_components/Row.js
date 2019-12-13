import React from 'react'

const Row = ({children, showTitle, title, jss}) =>(
	<div className={jss.row}>
		<h2 className={`${jss.row_title} ${!showTitle && jss.hidden_header}`}>{title}</h2>
		<div className={jss.row_inner}>
			{children}
		</div>
	</div>
)


export default Row