import React, {Component, useState} from 'react'
import {createUseStyles} from 'react-jss'
import * as mixins from '../../jss/mixins'


export class TestClassA extends Component {
	state = {
		margin: 0,
		jss: {}
	}

	_handleMarginChange(){

	}

	render(){
		return(
			<div>
				<h1>TestClassA component</h1>
				<button onClick={this._handleMarginChange}>Change Margin</button>
				<div>
					<div>Thing to change</div>
					<div>thing</div>
				</div>
			</div>
		)
	}
}


const testJSS = createUseStyles({
	thing: props => ({
		boxSizing: 'border-box',
		padding: props.padding,
	}),

	thing_color: props => {
		const color = props.background === 'white' ? 'black' : 'white'
		return{
			color,
			backgroundColor: props.background,
		}
	},

	list: props => {
		const child = props.padding > 0
			? {
				flexGrow: 1,
				flexBasis: `calc(${100 / props.cols}% - ${Math.floor(props.padding * (props.cols - 1) / props.cols)}px - 1px)`,
			}
			: {

			}
		return{
			...mixins.flexAll('row','center','stretch','wrap'),
			width: 1024,

			'&>*':{
				...child,
				marginLeft: props.padding,
				[`&:nth-child(${props.cols}n-${props.cols - 1})`]:{ marginLeft: 0, },
				[`&:nth-child(n+${props.cols + 1})`]:{ marginTop: props.padding, },
			}
		}
	},

	list_4_cols: props => ({

	}),
		

	item:{
		backgroundColor: 'blue',
		color: 'white',
		textAlign: 'center',
		padding: [15, 0]
	}
})


export const TestFunctionA = ({init}) => {

	const[state, setState] = useState({
		padding: parseInt(init),
		background: 'black',
		cols: 4,
	})

	const [jss] = useState(testJSS(state))

	const changePadding = e => {
		const padding = parseInt(e.target.value)
		setState( state => ({
			...state,
			padding
		}))
	}

	const changeBackground = e => {
		const background = e.target.value
		setState( state => ({
			...state,
			background
		}))
	}

	const changeCols = e => {
		const cols = parseInt(e.target.value)
		setState( state => ({
			...state,
			cols
		}))
	}

	return(
		<div>
			<h1>TestFunctionA component</h1>
			<span>Change le padding </span>
			<select defaultValue={init} onChange={changePadding}>
				<option>5</option>
				<option>10</option>
				<option>15</option>
				<option>20</option>
			</select>
			<select defaultValue="black" onChange={changeBackground}>
				<option>black</option>
				<option>white</option>
			</select>
			<select defaultValue={state.cols} onChange={changeCols}>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
			</select>
			<div className={`${jss.thing} ${jss.list} ${jss.thing_color}`}>
				<div className={jss.item}>hola</div>
				<div className={jss.item}>hola</div>
				<div className={jss.item}>hola</div>
				<div className={jss.item}>hola</div>
				<div className={jss.item}>hola</div>
			</div>
		</div>
	)
}