import React from 'react'
import {createUseStyles} from 'react-jss'
import * as mixins from './mixins'

const large = 1024, mid = 768, small = 320

export const layoutStyles = margin => (
	createUseStyles({

		hidden_header:{
			...mixins.hidden(),
		},

		row:{
			width: '100%',
			'&:not(:first-child)':{
				marginTop: margin
			}
		},

		row_title:{
			textAlign: 'center',
		},

		row_inner:{
			...mixins.widthConstrain(large),
			...mixins.respondTo(large, {
				...mixins.flexAll('row', 'center', 'flex-start'),
			}),
		},

		container:{
			width: '100%',
			padding: [(margin * 2), 0]
		},

		list_3_cols:{ ...mixins.flexedGrid({cols: 1, margin: margin}, {cols: 2, margin: margin}, {cols: 3, margin: margin}), marginTop: margin},
		list_2_cols:{ ...mixins.flexedGrid({cols: 1, margin: margin}, {cols: 1, margin: margin}, {cols: 2, margin: margin}), marginTop: margin},
		list_1_cols:{ ...mixins.flexedGrid({cols: 1, margin: margin}, {cols: 1, margin: margin}, {cols: 1, margin: margin}), marginTop: margin},

		col_fill:{
			...mixins.respondTo(large,
				{
					flex: 1,
					'&:not(:first-child)':{
						marginLeft: margin
					}
				}
			)
		},
		col_third:{...mixins.respondTo(large, {width: 'calc(100% / 3)', marginLeft: margin})},
		col_80:{...mixins.respondTo(large, {width: '80%', marginLeft: margin})},
		col_70:{...mixins.respondTo(large, {width: '70%', marginLeft: margin})},
		col_60:{...mixins.respondTo(large, {width: '60%', marginLeft: margin})},
		col_50:{...mixins.respondTo(large, {width: '50%', marginLeft: margin})},
		col_40:{...mixins.respondTo(large, {width: '40%', marginLeft: margin})},
		col_30:{...mixins.respondTo(large, {width: '30%', marginLeft: margin})},

		col_sister:{
			...mixins.respondToMax(large, {marginTop: margin}),
			...mixins.respondTo(large, {marginLeft: margin}),
		},

		col_inner:{
			boxSizing: 'border-box',
			padding: 16,
			border: '1px solid white'
		},

		item:{
			backgroundColor: 'white',
			color: 'black',
			textAlign: 'center',
			padding: [16, 0]
		},

		item_inner:{
			boxSizing: 'border-box',
			padding: 16,
		},

		image:{
			display: 'block',
			width: '100%',
			marginBottom: margin,
			borderRadius: 10
		}

	})
)


export const connect_jss = (jss, Component) =>{
	return _ => {
		return <Component jss={jss()}/>
	}
}