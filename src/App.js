import React,{Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import './css/main.css'

import {handleInitialData} from './redux/actions/shared'

import UIMenu from './components/ui_components/UIMenu'

import SiteBody from './components/site_components/SiteBody'
import LoadingBar from 'react-redux-loading-bar'

const viernullvier = _ =>{
	return(
		<div>There is nothing here</div>
	)
}

const Baby = _ =>{
	return(
		<div>Baby</div>
	)
}

const Jesus = _ =>{
	return(
		<Fragment>
			{/* TODO header Component*/}
			<SiteBody />
			{/* TODO footer Component*/}
		</Fragment>
	)
}

const App = ({init, loading}) =>{
	useEffect( _ => init())
	return (
		<Fragment>
			<LoadingBar />
			{
				loading === true
					? <div>wait</div>
					: <Fragment>
						<UIMenu />
						<Switch>
							<Route exact path="/" component={Baby} />
							<Route path="/jesus" component={Jesus}/>
							<Route component={viernullvier}/>
						</Switch>
					</Fragment>
					
			}
		</Fragment>
	)

}

const mapStateToProps = ({finish}) => {
	return {
		loading: finish === null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: _ => {dispatch(handleInitialData())},
	}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
