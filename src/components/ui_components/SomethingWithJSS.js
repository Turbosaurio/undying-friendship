import React, {Fragment, useState} from 'react'
import {connect} from 'react-redux'

import {connect_jss, layoutStyles} from '../../jss/ui'
// import {mongoSample} from '../../redux/API'




const SomethingWithJSS = ({jss, mongo}) =>{
	const [margin, setMargin] = useState(20)
	
	function _handleMargin(m){
		setMargin(m)
	}

	const {rows, widgets} = mongo
	/*
		rows[{},{}]

	*/
	return(
		<div>
			{rows.map(r =>(
				<div className={jss.row}>{
					Object.keys(r).map( i => {
						const {rowTitle, widgets_list} = r[i]
						return (
							<Fragment>
								<h2 className={jss.row_title}>{rowTitle.show ? rowTitle.text : ''}</h2>
								<div className={jss.row_inner}>
									{
										widgets_list.map( w => {
											const widget = widgets[w]
											return(
												<div className={jss.col_fill}>
													<div class={jss.col_inner}>
														<h3>{widget.name}</h3>
														{widget.contents.img.show &&
															<img
																className={jss.image}
																alt={widget.contents.img.alt}
																src={widget.contents.img.src}
															/>
														}
														{widget.contents.excerpt.show &&
															<div>{widget.contents.excerpt.text}</div>
														}
														{widget.contents.itemsList.show &&
															<div className={jss.list_3_cols}>
																{
																	widget.contents.itemsList.list.map( item => <div className={jss.item}>{item}</div>)
																}
															</div>
														}
													</div>
												</div>
											)
										})
									}
								</div>
								
							</Fragment>
						)
					})
				}</div>
			))}
		</div>
	)
}

const mapStateToProps = ({mongo}) => ({mongo})

export default connect_jss(
	layoutStyles(10),
	connect(mapStateToProps)(SomethingWithJSS)
)