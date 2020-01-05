import React, {useState} from 'react'
import {connect} from 'react-redux'

import {widgetSettingsChange} from '../../redux/actions/mongo'
import {createUseStyles} from  'react-jss'


const UISettings = ({DBWidgets, setWidgetKey}) => {

	const dbarr = Object.keys(DBWidgets)
	const [widgetId, setWidgetId] = useState(dbarr[0])

	return(
		<div>
			<h1>Settings</h1>
			<h2>Widget Settings</h2>
			<h3>{widgetId}</h3>
			<select defaultValue={widgetId} onChange={ e => {
				setWidgetId(e.target.value)
			}}>
				{ dbarr.map( w => <option key={w} value={w}>{DBWidgets[w].contents.name}</option>)}
			</select>
			<select defaultValue="horizontal" onChange={ e => {
				setWidgetKey(widgetId, 'summaryLayout', e.target.value)
			}}>
				<option value="horizontal">Horizontal</option>
				<option value="vertical">Vertical</option>
			</select>
		</div>		
	)
}


const mapStateToProps = ({mongo}) => {
	const DBWidgets = mongo.widgets
	return {DBWidgets}
}

const mapDispatchToProps = dispatch => {
	return{
		setWidgetKey: (id, key, data) => {
			// TODO save in database
			dispatch(widgetSettingsChange({id, key, data}))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UISettings)