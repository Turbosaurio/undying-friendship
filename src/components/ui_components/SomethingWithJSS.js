import React, {useState} from 'react'
import {connect} from 'react-redux'

import {connect_jss, layoutStyles} from '../../jss/ui'
import {mongoSample} from '../../redux/API'


const SomethingWithJSS = ({jss, mongo}) =>{
	const [margin, setMargin] = useState(20)
	
	function _handleMargin(m){
		setMargin(m)
	}

	const {rows, widgets} = mongoSample

	return(
		<div>
			{rows.map(row =>(
				<div key={row} className={jss.row}>
					<div className={jss.row_inner}>
						{
							Object.keys(widgets).map( widget => {
								const {name, type, column, rowID, list} = widgets[widget]
								let item_color = ''

								switch(column){
									case 'b': item_color = {backgroundColor: 'red'}; break;
									case 'c': item_color = {backgroundColor: 'green'}; break;
									default: item_color = {backgroundColor: 'blue'}; break;
								}

								if(row === rowID) return (
									<div key={widget} className={`${jss.list_3_cols} ${column !== 'a' ? jss.col_sister : ''}`}>
										{list.map( i => <div style={item_color}>{i}</div>)}
									</div>
								)
							})
						}
					</div>
				</div>
			))}
		</div>
	)
}

const mapStateToProps = ({mongo}) => ({mongo})

export default connect_jss(
	layoutStyles(10),
	connect(mapStateToProps)(SomethingWithJSS)
)