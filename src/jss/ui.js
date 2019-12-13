
import {createUseStyles} from 'react-jss'
import * as mixins from './mixins'

import {
	viewports,

} from './settings'

export const uiColors = (theme, type = 'dark') => {

	const colors = _ =>{
		switch(type){
			case 'dark': return mixins.invertTheme(theme)
			default: return theme
		}
	}

	const {
		color_1, bg_color_1,
		color_2, bg_color_2,
		color_3, bg_color_3,
	} = colors

	return createUseStyles({

	})
}


export const uiLayout = (margin, side, type) => {
	const {large, mid, small} = viewports
	return createUseStyles({
		ui_panel:{
			position: 'absolute',
			top: 0,
			height: '100vh',
			width: small,
			boxSizing: 'border-box',
			padding: margin,
		},

		[`ui_panel_${side}`]:{
			[`${side}`]: 0,
		},


		[`ui_panel_${type}`]:{

		},

		ui_column:{
			width: '100%',
		},

		ui_title:{
			marginTop: 0,
		}

	})
}
