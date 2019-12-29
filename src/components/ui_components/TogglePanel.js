import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'

import * as mixins from '../../jss/mixins'

const panelJSS = createUseStyles({

	panel_container:{
		boxSizing: 'border-box',
		padding: 10,
		backgroundColor: 'white',
		color: 'black',
	},

	panel_header:{
		...mixins.flexAll('row', 'space-between', 'center'),
	},

	panel_inner:{
		...mixins.flexAll('row', 'center', 'center', 'wrap'),
		'&>*':{
			display: 'block',
			margin: [10, 5, 0]
		}
	},

	panel_label:{
		fontWeight: 700
	},

	button: props => ({
		position: 'relative',
		border: 'none',
		padding: 0,
		backgroundColor: 'transparent',
		overflow: 'hidden',
		width: props.size,
		height: props.size,
		
	})
})

const TogglePanel = ({name, children, initial}) => {
	const [status, toggleStatus] = useState(initial)
	const [icon, toggleIcon] = useState('X')

	function toggle(){
		toggleStatus(!status)
		if(icon === 'X'){
			toggleIcon('O')
		} else {
			toggleIcon('X')
		}
	}
	const title = status ? 'open' : 'closed'

	const jss = panelJSS({size: 20})

	return(
		<div className={jss.panel_container}>
			<div className={jss.panel_header}>
				<div>{name}</div>
				<button className={jss.button} title={title} onClick={toggle}>{icon}</button>
			</div>
			<div className={jss.panel_inner}>
				{status && children}
			</div>
		</div>
	)
}

export default TogglePanel