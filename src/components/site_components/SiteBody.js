import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import Row from './Row'
import Widget from './Widget'

const SiteBody = ({mongo}) =>{
	const {rows, widgets} = mongo

	

	return(
		<Fragment>
			{rows.map(row => {
				return Object.keys(row).map(rowID => {
					const {rowSettings, widgets_list} = row[rowID]
					return(
						<Row key={rowID} {...rowSettings}>
							{widgets_list.map(widgetID =>
								<Widget key={widgetID} {...widgets[widgetID]}/>)
							}
						</Row>
					)
				})
			})}
		</Fragment>
	)
}

const mapStateToProps = ({mongo}) => ({mongo})

export default connect(mapStateToProps)(SiteBody)

