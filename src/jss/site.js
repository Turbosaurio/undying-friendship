import {createUseStyles} from 'react-jss'
import * as mixins from './mixins'

import {
	viewports,
} from './settings'


const {large, mid, small} = viewports


export const siteColors = custom => {
	const styles = createUseStyles({
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
	})(custom)
	return ( classes = [] ) => {
		return classes
			.reduce ( (acc, curr) => {
				if( styles[curr] ) acc.push(styles[curr])
				return acc
			}, [])
			.join(" ")
	}
}



export const rowStyles = createUseStyles({
	
	row: props => ({
		width: '100%',
		paddingRight: props.rowSpacing,
		marginTop: props.rowSpacing * 2,
	}),

	row_padded: props => ({
		boxSizing: 'border-box',
		paddingLeft: props.rowSpacing,
	}),

	row_title:{
		...mixins.widthConstrain(large),
		textAlign: 'left',
		textTransform: 'uppercase',
		fontSize: 40,
		marginTop: 0,
		marginBottom: props => props.rowSpacing,

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

export const widgetStyles = custom => {
	const styles = createUseStyles({
		list_grid: props => ({
			...mixins.flexedGrid(
				{cols: 1, margin: props.margin},
				{cols: 2, margin: props.margin},
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
			
		}),

		list_item:{
			backgroundColor: 'rgba(200,200,200,.15)',
			color: 'white',
			textAlign: 'center',
			padding: [8, 0],
			fontSize: '1rem',
		},

		item_name:{
			fontSize: 32,
			textTransform: 'uppercase',
			marginTop: 0,
			marginBottom: props => props.margin,
		},

		item_summary:{
			marginBottom: props => props.margin,			
		},

		item_inner_row:{
			...mixins.flexAll('row', 'center', 'stretch'),
			'&> *':{
				flexGrow: 1,
				flexBasis: '50%',
			},
			'&> *:not(:first-child)':{
				marginLeft: props => props.margin
			},
		},

		item_summary_background:{
			backgroundSize: 'cover',
			boxSizing: 'border-box',
			padding: props => props.margin * 2,
			color: 'white',
			...mixins.maskFullsize('before',{
				backgroundColor: 'rgba(15,15,15,.75)',
			}),
			'&> *':{
				position: 'relative',
			}
		},

		item_summary_a:{
			
		},

		item_summary_b: props => ({
			
		}),

		item_summary_c: props => ({
			textAlign: 'center',
			'&> *:not(:first-child)':{
				marginTop: props.margin,
			},
			'& h3':{
				marginBottom: 0,
			}
		}),

		item_summary_d: props => ({
			'&> *:not(:first-child)':{
				marginTop: props.margin,
			},
		}),

		item_summary_e: props => ({
			textAlign: 'center',
			'&> div:not(:first-child)':{
				marginTop: props.margin,
			},
		}),

		item_summary_f: props => ({
			textAlign: 'center',
		}),


		item_vertical_summary:{
			display: 'block',
		},

		item_inner:{
			boxSizing: 'border-box',
			padding: 16,
		},

		image_holder:{
			alignSelf: 'stretch'
		},

		image: props => ({
			display: 'block',
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		})


	})(custom)

	return ( classes = [] ) => {
		return classes
			.reduce ( (acc, curr) => {
				if( styles[curr] ) acc.push(styles[curr])
				return acc
			}, [])
			.join(" ")
	}
}





