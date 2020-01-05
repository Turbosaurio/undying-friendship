import React, {Component, Fragment} from 'react'
import {createUseStyles} from 'react-jss'
import {NavLink} from 'react-router-dom'
import connect_js from '../../jss/connect_jss'
import * as mixins from '../../jss/mixins'
import {viewports} from '../../jss/settings'


const {large, mid, small} = viewports

const white = '#fff', black = '#000', gray = '#ccc'

const jss = createUseStyles({
	nav_menu:{
		backgroundColor: white,
		color: black,
		'& a':{
			color: 'inherit',
			textDecoration: 'none',
		}
	},
	nav_list:{
		...mixins.strippedList(),
		backgroundColor: white,
		...mixins.respondToMax(large, {
			position: 'absolute',
			top: 50,
			right: 0,
			width: '100%',
			textAlign: 'right',
			'&.closed':{
				height: 0,
				overflowY: 'hidden'
			},	
			boxSizing: 'border-box',
			padding: [0, 10]
		}),
		...mixins.respondTo(large, {
			...mixins.flexAll('row', 'space-between', 'flex-start'),
		}),
	},

	nav_item:{
		position: 'relative',
		'&>a':{
			display: 'block',
			padding: 10,
			backgroundColor: white,
			color: black,
			...mixins.hover({
				backgroundColor: gray,
				color: black,
				textDecoration: 'none'
			})
		},
		'&.open':{
			'&>a':{
				backgroundColor: gray,
			}
		},
	},


	dropdown:{
		...mixins.strippedList(),
		backgroundColor: white,
		'& li>a':{
			width: '100%',
			display: 'inline-block',
			boxSizing: 'border-box',
			padding: '1em',
			color: black,
			...mixins.hover({
				backgroundColor: gray
			}),
		},
		'&.closed':{
			display: 'none',
		},
		'&.open':{
			...mixins.flexAll('column', 'flex-start', 'stretch')
		},
		...mixins.respondTo(large, {
			position: 'absolute',
			top: '100%',
			left: 0,
			width: '12em',
		}),
	},
})


class Menu extends Component{
	state = {
		nav:{			
			'9597909f-e455-4e41-af16-6927fcaa5255':{
				name: 'Nosotros',
			},
			'bd76165a-a726-46a9-ac76-53c83d0e7524':{
				name: 'Mision',
				subItems: {
					'bd602f4d-88e0-4a50-8959-29f64ceed70e':{
						name: 'Dropdown 1',
					},
					'0acd1ad2-dcab-4952-a3b7-25bf35146dd8':{
						name: 'Dropdown 2',
					},
				}
			},
			'86c64164-09da-4132-81cf-1b6822d8db78':{
				name: 'Vision'
			},
			'caf87107-4683-4492-8f21-f22ab97f5872':{
				name: 'Destripacion'
			},
			'4832506c-5277-4a80-a9f0-642d6a335588':{
				name: 'Comercial'
			},
			'a8771bda-0874-40ad-9d89-dbdb7f059dd3':{
				name: 'Contacto',
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
		const {jss, menuStatus} = this.props

		return(
			<nav className={`${jss.nav_menu}`} aria-label="Turbosaurio's Navigation Menu">
				<ul className={`${menuStatus} ${jss.nav_list}`}>
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
											<a className={`${jss.nav_item}`}>{item.name}</a>
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