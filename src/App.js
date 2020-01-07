import React,{Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import './css/main.css'

import {handleInitialData} from './redux/actions/shared'

import LoadingBar from 'react-redux-loading-bar'

import UIMain from './components/ui_components/UIMain'
import {TestFunctionA} from './components/test_components/TestA'

import SiteHeader from './components/site_components/SiteHeader'
import SiteBody from './components/site_components/SiteBody'

const viernullvier = _ =>{
	return(
		<div>There is nothing here</div>
	)
}

const Test = _ => <TestFunctionA init={10}/>

const Site = _ =>{
	return(
		<Fragment>
			<SiteHeader />
			<SiteBody />
			{/* TODO footer Component*/}
		</Fragment>
	)
}

const App = ({init, loading}) =>{
	useEffect( _ => {init()}, [init])
	return (
		<Fragment>
			<LoadingBar />
			{
				loading === true
					? <div>warte mal</div>
					: <Fragment>
						<UIMain/>
						<Switch>
							<Route exact path="/" component={Test} />
							<Route path="/site" component={Site}/>
							<Route component={viernullvier}/>
						</Switch>
					</Fragment>
					
			}
		</Fragment>
	)

}

const mapStateToProps = ({finish}) => {
	return {
		loading: finish === null,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: _ => {dispatch(handleInitialData())},
	}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
