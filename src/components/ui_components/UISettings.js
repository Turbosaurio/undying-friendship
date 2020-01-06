import React, {useState} from 'react'
import {connect} from 'react-redux'

import {widgetSettingsChange} from '../../redux/actions/mongo'
import {createUseStyles} from  'react-jss'
import UISwitchSelector from './UISwitchSelector'


const UISettings = ({DBWidgets, setWidgetKey}) => {

	const dbarr = Object.keys(DBWidgets)
	const [currentWidget, setCurrentWidget] = useState({
		id: '',
		settings: {}
	})

	const changeCurrentWidget = id => {
		setCurrentWidget( state => ({
			...state,
			id,
			settings: DBWidgets[id].widgetSettings,
		}))
	}
	
	const {id, settings} = currentWidget

	const setSummaryLayout = val => {
		setWidgetKey(id, 'summaryLayout', val)
	}

	

	return(
		<div>
			<h1>Settings</h1>
			<h2>Widget Settings</h2>
			<select onChange={ e => {
				changeCurrentWidget(e.target.value)
			}}>
				{ dbarr.map( w => <option key={w} value={w}>{DBWidgets[w].contents.name}</option>)}
			</select>
			<span>{` ${id}`}</span>

			{
				id
					? <div>
						<UISwitchSelector list={['horizontal','vetical']} action={setSummaryLayout}/>
					
						<select defaultValue={1} onChange={ e => {
							setWidgetKey(id, 'listColumns', e.target.value)
						}}>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
						</select>
						<select defaultValue="a_a" onChange={ e => {
							setWidgetKey(id, 'colorScheme', e.target.value)
						}}>
							<option value="bg_1">blue</option>
							<option value="bg_2">green</option>
							<option value="bg_3">red</option>
							<option value="bg_4">greenblue</option>
						</select>

						<form>
							<input type="checkbox"/><label>Has title</label>
							<input type="checkbox"/><label>Has summary</label>
							<input type="checkbox"/><label>Has image</label>
						</form>
					</div>
					: <span>Please select a widget</span>
			}


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