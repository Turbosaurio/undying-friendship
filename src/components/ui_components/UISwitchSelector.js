import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import * as mixins from '../../jss/mixins'

const switchStyles = createUseStyles({
	list:{
		marginTop: 10,
		...mixins.flexedGrid(
			{cols: 3, margin: 10},
			{cols: 3, margin: 10},
			{cols: 3, margin: 10},
		)
	},

	option:{
		padding: [25, 0],
		textAlign: 'center',
		color: 'white',
		boxSizing: 'border-box',
		border: '2px solid white',
		backgroundColor: 'transparent',
		'&.active':{
			borderColor: 'red'
		}
	}

})

const UISwitchSelector = props => {

	const {list, action} = props
	const jss = switchStyles()

	const [currentAction, setCurrent] = useState(list[0])

	return(
		<div className={jss.list}>
			{
				list.map((option, i) =>{
					return <button
						key={i}
						onClick={ _ => {
							setCurrent(option)
							action(option)
						}}
						className={`${jss.option} ${option === currentAction ? 'active' : 'inactive'}`}
					>{option}</button>
				})
			}
		</div>
	)
}

export default UISwitchSelector