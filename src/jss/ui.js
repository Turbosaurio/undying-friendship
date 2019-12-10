import React from 'react'
import {createUseStyles} from 'react-jss'
import * as mixins from './mixins'

const small = '320px', mid = '768px', large = '1024px'

const mobile = {
	cols: 1,
	margin: 20,
}

const tablet = {
	cols: 2,
	margin: 20,
}

const desktop = {
	cols: 4,
	margin: 10,
}

export const ui_styles = createUseStyles({
	toggleButton:{
		backgroundColor: 'green',
		color: 'white',
		border: 'none',
		fontWeight: 700,
		'&.open':{
			backgroundColor: 'red',
		}
	},
	highlight:{
		backgroundColor: 'yellow',
		color: 'black',
		padding: [6, 12]
	}
})



export const site_styles = createUseStyles({
	menu:{
		...mixins.strippedList(),
		...mixins.singleRow(25),
		...mixins.widthConstrain(large),
	},
	menuItem: {
		textAlign: 'center',
		backgroundColor: 'black',
		color: 'white'
	},
	list:{
		...mixins.strippedList(),
		...mixins.widthConstrain(large),
		...mixins.flexedGrid(
			{cols: 2, margin: 10},
			{cols: 4, margin: 10},
			{cols: 5, margin: 10},
		)
	},
	listItem:{
		backgroundColor: 'green',
		textAlign: 'center',
		padding: [15, 0],
		color: 'white'
	}
})


export const connect_jss = (jss, Component) =>{
	return _ => {
		return <Component jss={jss()}/>
	}
}