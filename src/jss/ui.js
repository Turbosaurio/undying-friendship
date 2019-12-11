import React from 'react'
import {createUseStyles} from 'react-jss'
import * as mixins from './mixins'

const large = 1024, mid = 768, small = 320

export const layoutStyles = margin => (
	createUseStyles({
		row:{
			width: '100%',
			padding: [(margin * 2), 0]
		},
		row_inner:{
			...mixins.widthConstrain(large),
			...mixins.respondTo(large, {
				...mixins.flexAll('row', 'center', 'flex-start'),
			}),
		},

		list_3_cols:{ ...mixins.flexedGrid({cols: 1, margin: margin}, {cols: 2, margin: margin}, {cols: 3, margin: margin}), },
		list_2_cols:{ ...mixins.flexedGrid({cols: 1, margin: margin}, {cols: 1, margin: margin}, {cols: 2, margin: margin}), },
		list_1_cols:{ ...mixins.flexedGrid({cols: 1, margin: margin}, {cols: 1, margin: margin}, {cols: 1, margin: margin}), },

		col_fill:{...mixins.respondTo(large, {flex: 1,})},
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
		}
	})
)


export const connect_jss = (jss, Component) =>{
	return _ => {
		return <Component jss={jss()}/>
	}
}