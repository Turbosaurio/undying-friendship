import React, {useState} from 'react'
import {connect} from 'react-redux'

import {rowSettingsChange, widgetSettingsChange} from '../../redux/actions/mongo'
import UISwitchSelector from './UISwitchSelector'


const UISettings = ({rows, widgets, updateRowInStore, updateWidgetInStore}) => {

	const [state, setState] = useState({
		row:{
			current: '',
		},
		widget:{
			current: '',
		}
	})

	const changeComponent = (component, id) => {
		setState( state => ({
			...state,
			[component]:{
				...state[component],
				current: id
			}
		}))
	}


	const setRowKey = (key, data) => {
		updateRowInStore(state.row.current, key, data)
	}
	const setRowConstrain = data => { setRowKey('constrain', data) }
	const setRowTitle = data => { setRowKey('showTitle', data) }


	const setWidgetKey = (key, data) => {
		updateWidgetInStore(state.widget.current, key, data)
	}
	const setSummaryLayout = data => { setWidgetKey('summaryLayout', data) }
	const setListCols = data => { setWidgetKey('listColumns', data) }
	const setWidgetColor = data => { setWidgetKey('colorScheme', data) }


	const {row, widget} = state

	return(
		<div>
			<h1>Settings</h1>

			<h2>Row Settings</h2>
			<select onChange={ e => {
				changeComponent('row',e.target.value)
			}}>
				{ Object.keys(rows).map( r => <option key={r} value={r}>{rows[r].rowSettings.title}</option>)}
			</select>
			<span>{` ${row.current}`}</span>
			{
				row.current !== ''
				?	<div>
					<h3>Row constrain</h3>
					<UISwitchSelector list={['yes','no']} action={setRowConstrain}/>
					<h3>Show Title</h3>
					<UISwitchSelector list={['yes','no']} action={setRowTitle}/>
				</div>
				: <span>Please select a row</span>
			}


			<h2>Widget Settings</h2>
			<select onChange={ e => {
				changeComponent('widget',e.target.value)
			}}>
				{ Object.keys(widgets).map( w => <option key={w} value={w}>{widgets[w].contents.name}</option>)}
			</select>
			<span>{` ${widget.current}`}</span>

			{
				widget.current !== ''
					? <div>
						<h3>Summary Layout</h3>
						<UISwitchSelector list={['horizontal','vetical']} action={setSummaryLayout}/>
						<h3>List Columns</h3>
						<UISwitchSelector list={[1,2,3,4]} action={setListCols}/>
						<h3>Widget background colour</h3>
						<UISwitchSelector list={['bg_1','bg_2','bg_3','bg_4']} action={setWidgetColor}/>
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
	const {rows, widgets} = mongo
	return {rows, widgets}
}

const mapDispatchToProps = dispatch => {
	return{
		updateRowInStore: (id, key, data) => {
			// TODO save in database
			dispatch(rowSettingsChange({id, key, data: data === 'yes' ? true : false}))
		},
		updateWidgetInStore: (id, key, data) => {
			// TODO save in database
			dispatch(widgetSettingsChange({id, key, data}))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UISettings)