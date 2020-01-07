import {createUseStyles} from 'react-jss'
import * as mixins from './mixins'

import {
	viewports,
} from './settings'


const {large, mid, small} = viewports


export const siteColors = createUseStyles({
	coloring_bg_1: theme =>({
		backgroundColor: theme.bg_1,
		color: 'white'
	}),
	coloring_bg_2: theme =>({
		backgroundColor: theme.bg_2,
		color: 'white'
	}),
	coloring_bg_3: theme =>({
		backgroundColor: theme.bg_3,
		color: 'white'
	}),
	coloring_bg_4: theme =>({
		backgroundColor: theme.bg_4,
		color: 'white'
	}),
})


export const rowStyles = createUseStyles({
	
	row: props => ({
		width: '100%',
		paddingRight: props.rowSpacing,
	}),

	row_padded: props => ({
		boxSizing: 'border-box',
		paddingLeft: props.rowSpacing,
	}),

	row_title:{
		textAlign: 'center',
	},

	hidden_header:{
		...mixins.hidden(),
	},

	row_inner:{
		...mixins.respondTo(mid, {
			...mixins.flexAll('row', 'center', 'flex-start'),
		}),
	},

	row_inner_constrain:{
		...mixins.widthConstrain(large),
	},
})


export const widgetStyles = createUseStyles({
	// props:{margin,cols}
	list_grid: props => ({
		marginTop: props.margin,
		...mixins.flexedGrid(
			{cols: 1, margin: props.margin},
			{cols: 1, margin: props.margin},
		),
	}),

	list_grid_1: props => ({
		...mixins.flexedGrid(
			{}, {},
			{cols: 1, margin: props.margin},
		),
	}),

	list_grid_2: props => ({
		...mixins.flexedGrid(
			{}, {},
			{cols: 2, margin: props.margin},
		),
	}),

	list_grid_3: props => ({
		...mixins.flexedGrid(
			{}, {},
			{cols: 3, margin: props.margin},
		),
	}),

	list_grid_4: props => ({
		...mixins.flexedGrid(
			{}, {},
			{cols: 4, margin: props.margin},
		),
	}),



	col_fill: props =>({
		...mixins.respondTo(large,
			{
				flex: 1,
				'&:not(:first-child)':{
					marginLeft: props.margin
				}
			}
		)
	}),
	
	col_sister: props => ({
		...mixins.respondToMax(large, {marginTop: props.margin}),
		...mixins.respondTo(large, {marginLeft: props.margin}),
	}),

	col_inner: props =>({
		boxSizing: 'border-box',
		padding: props.margin,
		border: '1px solid white',
	}),

	item:{
		backgroundColor: 'white',
		color: 'black',
		textAlign: 'center',
		padding: [16, 0],
		fontWeight: 700,
		fontSize: '2rem',
	},

	item_summary:{
		marginTop: 10,
		'& h3':{ marginTop: 0}
	},

	item_horizontal_summary: props => ({
		...mixins.flexAll('row', 'center', 'stretch', 'wrap'),
		'&>*':{
			...mixins.respondToMax(mid, {
				width: '100%',
				'&:not(:first-child)':{
					marginTop: props.margin
				}
			}),
			...mixins.respondTo(mid, {
				flex: 1,
				'&:not(:first-child)':{
					marginLeft: props.margin
				}
			})
		}
	}),

	item_vertical_summary:{
		display: 'block',
	},

	item_inner:{
		boxSizing: 'border-box',
		padding: 16,
	},

	image: props => ({
		display: 'block',
		width: '100%',
		marginBottom: props.margin,
		borderRadius: 10,
		alignSelf: 'flex-start'
	})
})


