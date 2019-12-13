import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import {siteLayout} from '../../jss/site'
import connect_jss from '../../jss/connect_jss'

import Row from './Row'
import Widget from './Widget'

const SiteBody = ({mongo, jss}) =>{
	const {rows, widgets} = mongo
	return(
		<Fragment>
			{rows.map(row => {
				return Object.keys(row).map(rowID => {
					const {rowSettings, widgets_list} = row[rowID]
					return(
						<Row key={rowID} jss={jss} {...rowSettings}>
							{widgets_list.map(widgetID =>
								<Widget key={widgetID} jss={jss} contents={widgets[widgetID].contents}/>)
							}
						</Row>
					)
				})
			})}
		</Fragment>
	)
}

const mapStateToProps = ({mongo}) => ({mongo})

export default connect_jss(
	siteLayout(20),
	connect(mapStateToProps)(SiteBody)
)