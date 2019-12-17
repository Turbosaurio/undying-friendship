import {createUseStyles} from 'react-jss'
import * as mixins from './mixins'

import {
	viewports,
} from './settings'


const {large, mid, small} = viewports


export const siteColors = createUseStyles({
	coloring_a_a: theme =>({
		backgroundColor: theme.bg_color_1,
		color: theme.color_1
	}),
	coloring_a_b: theme =>({
		backgroundColor: theme.bg_color_1,
		color: theme.color_2
	}),
	coloring_b_b: theme =>({
		backgroundColor: theme.bg_color_2,
		color: theme.color_2,
	}),
	coloring_b_c: theme =>({
		backgroundColor: theme.bg_color_2,
		color: theme.color_3,
	}),
	coloring_c_c: theme =>({
		backgroundColor: theme.bg_color_3,
		color: theme.color_3
	}),
})


export const rowStyles = createUseStyles({

	hidden_header:{
		...mixins.hidden(),
	},

	row_title:{
		textAlign: 'center',
	},

	row:{
		width: '100%'
	},

	row_padded:{
		boxSizing: 'border-box',
		padding: [0, 10]
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

	list_3_cols: margin => ({ ...mixins.flexedGrid({cols: 1, margin: margin}, {cols: 2, margin: margin}, {cols: 3, margin: margin}), marginTop: margin}),
	list_2_cols: margin => ({ ...mixins.flexedGrid({cols: 1, margin: margin}, {cols: 1, margin: margin}, {cols: 2, margin: margin}), marginTop: margin}),
	list_1_cols: margin => ({ ...mixins.flexedGrid({cols: 1, margin: margin}, {cols: 1, margin: margin}, {cols: 1, margin: margin}), marginTop: margin}),

	col_fill: margin =>({
		...mixins.respondTo(large,
			{
				flex: 1,
				'&:not(:first-child)':{
					marginLeft: margin
				}
			}
		)
	}),
	

	col_sister: margin => ({
		...mixins.respondToMax(large, {marginTop: margin}),
		...mixins.respondTo(large, {marginLeft: margin}),
	}),

	col_inner: margin =>({
		boxSizing: 'border-box',
		padding: margin,
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

	item_inner:{
		boxSizing: 'border-box',
		padding: 16,
	},

	image: margin => ({
		display: 'block',
		width: '100%',
		marginBottom: margin,
		borderRadius: 10
	})
})


