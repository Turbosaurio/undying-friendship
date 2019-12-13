import React,{Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import './css/main.css'

import {handleInitialData} from './redux/actions/shared'

import UIMenu from './components/ui_components/UIMenu'
import UISettings from './components/ui_components/UISettings'

import SiteBody from './components/site_components/SiteBody'
import LoadingBar from 'react-redux-loading-bar'
import TogglePanel from './components/ui_components/TogglePanel'

import {TestFunctionA} from './components/test_components/TestA'


const viernullvier = _ =>{
	return(
		<div>There is nothing here</div>
	)
}

const Test = _ => <TestFunctionA init={5}/>

const Site = _ =>{
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
						<TogglePanel name="navigation">
							<UIMenu />
						</TogglePanel>
						<TogglePanel name="settings">
							<UISettings />
						</TogglePanel>
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
		loading: finish === null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: _ => {dispatch(handleInitialData())},
	}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
