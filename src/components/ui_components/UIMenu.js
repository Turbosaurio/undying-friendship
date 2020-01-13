import React, {Fragment} from 'react'
import {createUseStyles} from 'react-jss'
import {NavLink} from 'react-router-dom'
import * as mixins from '../../jss/mixins'

const menuStyles = createUseStyles({
	ui_nav: props => ({
		width: '100%',
		height: '100%',
		boxSizing: 'border-box',
		padding: [40, props.spacing, props.spacing]
	}),
	ui_menu_list:{
		...mixins.strippedList(),
	},
	ui_nav_item: props => ({
		height: props.navHeight,
		'&>a':{
			...mixins.flexAll('row','center','center'),
			width: '100%',
			height: '100%',
		}
	}),
})


const UIMenu = _ =>{
	const menuJSS = menuStyles({
		spacing: 20,
		navHeight: 30,
	})
	return(
		<Fragment>
			<div>Untodlich Freundschaft</div>
			<nav aria-label="User Interface Navigation" className={`${menuJSS.ui_nav}`}>
				<ul className={menuJSS.ui_menu_list}>
					<li className={`${menuJSS.ui_nav_item}`}><NavLink to="/">Test</NavLink></li>
					<li className={`${menuJSS.ui_nav_item}`}><NavLink to="/site">Site</NavLink></li>
					<li className={`${menuJSS.ui_nav_item}`}><NavLink to="/questionary">Questionary Test</NavLink></li>
					<li className={`${menuJSS.ui_nav_item}`}><NavLink to="/parallax">Parallax Test</NavLink></li>
				</ul>
			</nav>
		</Fragment>
	)
}


export default UIMenu