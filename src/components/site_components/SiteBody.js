import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import Row from './Row'
import Column from './Column'
import Widget from './Widget'

const SiteBody = ({rows, columns, widgets}) =>{	
	return(
		<Fragment>
			{Object.keys(rows).map(rowID => {
				const {rowSettings, columns_list} = rows[rowID]
				// return <div>{JSON.stringify(columns_list)}</div>
				return(
					<Row key={rowID} {...rowSettings}>
						{columns_list.map(columnID => {
							const {columnSettings, widgets_list} = columns[columnID] 
							return (<Column {...columnSettings}>
								{widgets_list.map(widgetID =>
									<Widget key={widgetID} {...widgets[widgetID]}/>)
								}
							</Column>)
						})}
					</Row>
				)
			})}
		</Fragment>
	)
}

const mapStateToProps = ({mongo}) => {
	const {rows, columns, widgets} = mongo
	return {rows, columns, widgets}
}

export default connect(mapStateToProps)(SiteBody)