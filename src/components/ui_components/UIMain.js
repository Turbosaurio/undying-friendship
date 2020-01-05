import React, {Fragment, useState, useEffect} from 'react'

import UITogglePanel from './UITogglePanel'
import UIMenu from './UIMenu'
import UISettings from './UISettings'

const UIMain = (props) => {

	const [state, setState] = useState({
		windowWidth: window.innerWidth,
		left: false,
		right: true,
	})


	const closePanel = side => {
		setState( state => {
			const opp = side === 'left' ? 'right' : 'left'
			return{
				...state,
				[side]: !state[side],
				[opp]: state.windowWidth < 1350 ? false : state[opp]
			}
		})
	}

	const updateWidth = _ => {
		setState( state => ({
			...state,
			windowWidth: window.innerWidth
		}))
	}

	useEffect( _ => {
		window.addEventListener('resize', updateWidth)
		return _ => window.removeEventListener('resize', updateWidth)
	})

	return(
		<Fragment>
			<UITogglePanel name="navigation" side="left" isOpen={state.left} clickFunction={ _ => closePanel('left')}>
				<UIMenu />
			</UITogglePanel>
			<UITogglePanel name="settings" side="right" isOpen={state.right} clickFunction={ _ => closePanel('right')}>
				<UISettings />
			</UITogglePanel>
		</Fragment>
	)
}

export default UIMain