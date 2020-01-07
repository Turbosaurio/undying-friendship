import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import Row from './Row'
import Widget from './Widget'

const SiteBody = ({rows, widgets}) =>{	
	return(
		<Fragment>
			{Object.keys(rows).map(row => {
				const {rowSettings, widgets_list} = rows[row]
				return(
					<Row key={row} {...rowSettings}>
						{widgets_list.map(widgetID =>
							<Widget key={widgetID} {...widgets[widgetID]}/>)
						}
					</Row>
				)
			})}
		</Fragment>
	)
}

const mapStateToProps = ({mongo}) => {
	const {rows, widgets} = mongo
	return {rows, widgets}
}

export default connect(mapStateToProps)(SiteBody)

