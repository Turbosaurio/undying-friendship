import React, {Component} from 'react'
import {connect} from 'react-redux'

import {connect_jss} from '../../jss/ui'
import {handleInitialData} from '../../redux/actions/shared'
import {createUseStyles} from 'react-jss'

import * as mixins from '../../jss/mixins'


const large = 1024


const styles = createUseStyles({
	container:{
		...mixins.widthConstrain(large),
		...mixins.respondTo(large, {
			...mixins.flexAll('row', 'center', 'flex-start'),
		}),
	},
	list_3:{
		...mixins.flexedGrid({cols: 1, margin: 20}, {cols: 2, margin: 20}, {cols: 3, margin: 20}),
	},
	list_1:{
		...mixins.flexedGrid({cols: 1, margin: 20}, {cols: 1, margin: 20}, {cols: 1, margin: 20}),
	},

	list_fill:{
		...mixins.respondTo(large, {
			flex: 1,
		})
	},

	list_320:{
		...mixins.respondTo(large, {
			width: 320,
			marginLeft: 20
		})
	},

	item:{
		padding: ['1rem', 0],
		textAlign: 'center',
	},

	item_red:{
		backgroundColor: 'red',
		color: 'white',
	},

	item_blue:{
		backgroundColor: 'blue',
		color: 'white',
	}
})


class SomethingWithJSS extends Component{

	state = {
		left_list: '',
		center_list: '',
		right_list: '',
	}

	componentDidMount(){
		const {jss} = this.props
		this.props.init()
		this.setState( state => ({
			...state,
			left_list: `${jss.list_3}  ${jss.list_fill}`,
			right_list: `${jss.list_1} ${jss.list_320}`
		}))
	}

	render(){
		const {jss} = this.props
		const list = [1,2,3,4,5,6,7,8,9]
		return(
			<div className={jss.container}>
				<div className={this.state.left_list}>
					{ list.map( i => <div key={i} className={`${jss.item} ${jss.item_red}`}>{i}</div>)}
				</div>
				<div className={this.state.right_list}>
					{ list.map( i => <div key={i} className={`${jss.item} ${jss.item_blue}`}>{i}</div>)}
				</div>
			</div>
		)
	}
}


const mapStateToProps = ({mongo}) => {
	return {
		mongo
	}
}


const mapDispatchToProps = dispatch => {
	return {
		init: _ => dispatch(handleInitialData()),
	}
}

export default connect_jss(
	styles,
	connect(mapStateToProps, mapDispatchToProps)(SomethingWithJSS)
)