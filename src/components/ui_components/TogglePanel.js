import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'

import * as mixins from '../../jss/mixins'
import * as settings from '../../jss/settings'

const {white, black} = settings.ui_colours
const {small, mid, large} = settings.viewports


const panelJSS = createUseStyles({

	panel_button:{
		...mixins.buttonHideText(),
		...mixins.makeCircle(32),
		marginLeft: 'auto',
		position: 'relative',
		backgroundColor: white,
		'&.close':{
			...mixins.pseudosCross(black),
			// backgroundColor: black,
		},
		'&.open':{
			...mixins.hamburgerGradient(16, 12, black),
		},
	},

	ui_panel:{
		'z-index': 9999,
		position: 'fixed',
		padding: 10,
		boxSizing: 'border-box',
		'&.open':{
			color: white,
			backgroundColor: black,
		},
		...mixins.respondToMax(large, {
			height: 50,
			width: '100%',
			left: 0,
			'&.open':{
				height: 'auto'
			},
			'&.left':{
				top: 0,
			},
			'&.right':{
				bottom: 0,
				'&.open':{
					maxHeight: '50vh',
				}
			},
		}),
		...mixins.respondTo(large, {
			top: 0,
			height: '100vh',
			transition: '.25s',
			width: 52,
			'&.open':{
				width: large / 2,
			},

			'&.left':{
				left: 0,
			},
			'&.right':{
				right: 0,
			},
		}),
		
	},
})

const TogglePanel = ({side, children, status, clickFunction}) => {
	const panelClass = status ? 'open' : 'closed'
	const buttonVerb = status ? 'close' : 'open'
	const jss = panelJSS()

	return(
		<div className={`${jss.ui_panel} ${side} ${panelClass}`}>
			<button className={`${jss.panel_button} ${buttonVerb}`} title={buttonVerb} onClick={clickFunction} />
			{status && children}
		</div>
	)
}

export default TogglePanel