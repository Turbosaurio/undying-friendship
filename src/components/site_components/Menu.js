import React, {Component, Fragment} from 'react'
import {createUseStyles} from 'react-jss'
import {NavLink} from 'react-router-dom'
import connect_js from '../../jss/connect_jss'
import * as mixins from '../../jss/mixins'
import {viewports} from '../../jss/settings'


const {large, mid, small} = viewports

const jss = createUseStyles({
	nav_menu:{

	},
	nav_list:{
		...mixins.strippedList(),
		...mixins.flexAll('row', 'space-between', 'flex-start'),
		...mixins.widthConstrain(large)
	},

	nav_item:{
		position: 'relative',
		'&.closed':{
			
		},
		'&.open':{
			backgroundColor: 'red',
			color: 'white'
		}
	},

	dropdown:{
		...mixins.strippedList(),
		position: 'absolute',
		top: '100%',
		left: 0,
		'&.closed':{
			display: 'none',
		},
		'&.open':{
			...mixins.flexAll('column', 'flex-start', 'stretch')
		},
	},
})


class Menu extends Component{
	state = {
		nav:{
			'af91214d-0462-43ce-b920-01dc1e14f126':{
				name: 'About Us',
				subItems: {
					'4e9f38ab-3025-4cd1-bbe3-39097d800c27':{
						name: 'Our Story',
					},
					'3b4c1303-ae0d-474b-b264-91187e0bde05':{
						name: 'Mission',
					},
				}
			},
		}
	}

	_toggleSubNav = id => {
		this.setState( state => ({
			...state,
			nav:{
				...state.nav,
				[id]:{
					...state.nav[id],
					show: !state.nav[id].show
				}
				
			}
		}))
	}

	render(){

		const {_toggleSubNav} = this
		const {nav} = this.state
		const {jss} = this.props

		return(
			<nav className={jss.nav_menu} aria-label="Turbosaurio's Navigation Menu">
				<ul className={jss.nav_list}>
				{
					Object.keys(nav).map( i => {
						const item = nav[i]
						return(
							<li
								key={i}
								// onClick={ _ => _toggleSubNav(i)}
								onMouseEnter={_ => _toggleSubNav(i, true)}
								onMouseLeave={_ => _toggleSubNav(i, false)}
								className={`
									${jss.nav_item}
									${item.show ? 'open' : 'closed'}
									${item.subItems ? 'with-dropdown' : ''}
								`}
							>
								{!item.subItems
										? <NavLink to={`/${i}`}>{item.name}</NavLink>
										: <Fragment>
											<a>{item.name}</a>
											<ul className={`
												${jss.dropdown}
												${item.show ? 'open' : 'closed'}
											`}>
												{
													Object.keys(item.subItems).map( s => {
														const subItem = item.subItems[s]
														return(
															<li key={s}>
																<NavLink to={`/${subItem.href ? subItem.href : s}`}>{subItem.name}</NavLink>
															</li>
														)
													})
												}
											</ul>
										</Fragment>
								}
							</li>
						)
					})
				}
				</ul>
			</nav>
		)
	}
}

export default connect_js(jss,Menu)