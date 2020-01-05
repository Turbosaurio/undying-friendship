import React from 'react'
import {connect} from 'react-redux'

import {rowStyles} from '../../jss/site'


const Row = ({rowSettings, children, showTitle, title, constrain}) =>{
	const jss = rowStyles(rowSettings)
	return(
		<div className={jss.row}>
			<h2 className={`${jss.row_title} ${!showTitle && jss.hidden_header}`}>{title}</h2>
			<div className={`${jss.row_inner} ${constrain && jss.row_inner_constrain}`}>
				{children}
			</div>
		</div>
	)
}

const mapStateToProps = ({mongo}) => ({
	rowSettings: mongo.settings.rows
})


export default connect(mapStateToProps)(Row)