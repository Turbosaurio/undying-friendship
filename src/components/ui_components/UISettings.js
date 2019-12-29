import React, {useState} from 'react'
import {connect} from 'react-redux'

import {settingsChange} from '../../redux/actions/mongo'

const UISettings = ({widgetSettings, setWidgets}) => {
	return(
		<div>
			<h1>Settings</h1>

			<select default-value={widgetSettings.summaryLayout} onChange={ e => {
				setWidgets({component: 'widgets', key: 'summaryLayout', data: e.target.value})
			}}>
				<option value={'horizontal'} selected="true">horizontal</option>
				<option value={'vertical'} >vertical</option>
			</select>

			<select default-value={widgetSettings.listColumns} onChange={ e => {
				setWidgets({component: 'widgets', key: 'listColumns', data: parseInt(e.target.value)})
			}}>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
			</select>

			<button onClick={ _ => {
				setWidgets(test)
			}}>change</button>
		</div>
	)
}


const mapStateToProps = ({mongo}) => {
	const widgetSettings = mongo.settings.widgets

	return {widgetSettings}
}

const mapDispatchToProps = dispatch => {
	return{
		setWidgets: props => { dispatch(settingsChange(props))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UISettings)