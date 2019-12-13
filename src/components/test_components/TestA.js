import React, {Component, useState} from 'react'
import {createUseStyles} from 'react-jss'



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
	thing: padding => ({
		padding: padding,
	}),

	thing_style: {
		boxSizing: 'border-box',
		backgroundColor: 'red',
		color: 'white',
	}
})


export const TestFunctionA = ({init}) => {

	const[space, setSpace] = useState(init)
	const jss = testJSS(parseInt(space))

	return(
		<div>
			<h1>TestFunctionA component</h1>
			<span>Change le padding </span>
			<select default-value={init} onChange={ e => setSpace(e.target.value)}>
				<option>5</option>
				<option>10</option>
				<option>15</option>
				<option>20</option>
			</select>
			<div>{`state: ${space}`}</div>
			<div className={`${jss.thing} ${jss.thing_style}`}>Thing</div>
		</div>
	)
}