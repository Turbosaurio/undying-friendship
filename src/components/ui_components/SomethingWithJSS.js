import React, {Component} from 'react'
import {connect} from 'react-redux'

import {connect_jss, ui_styles, site_styles} from '../../jss/ui'
import {handleInitialData} from '../../redux/actions/shared'


class SomethingWithJSS extends Component{

	state = {
		something: {}
	}

	componentDidMount(){
		this.props.init()
	}

	render(){
		const {jss} = this.props
		return(
			<div className={jss.highlight}>Hallo Baby!</div>
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
	ui_styles,
	connect(mapStateToProps, mapDispatchToProps)(SomethingWithJSS)
)