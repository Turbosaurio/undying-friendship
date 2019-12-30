import React,{Fragment, useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import './css/main.css'

import {handleInitialData} from './redux/actions/shared'

import UIMenu from './components/ui_components/UIMenu'
import UISettings from './components/ui_components/UISettings'

import LoadingBar from 'react-redux-loading-bar'
import TogglePanel from './components/ui_components/TogglePanel'

import {TestFunctionA} from './components/test_components/TestA'

import Menu from './components/site_components/Menu'
import SiteBody from './components/site_components/SiteBody'

const viernullvier = _ =>{
	return(
		<div>There is nothing here</div>
	)
}

const Test = _ => <TestFunctionA init={5}/>

const Site = _ =>{
	return(
		<Fragment>
			<Menu />
			<SiteBody />
			{/* TODO footer Component*/}
		</Fragment>
	)
}

const App = ({init, loading}) =>{

	const [panelLeftStatus, panelLeftStatusToggle] = useState(false)
	const [panelRightStatus, panelRightStatusToggle] = useState(false)

	const panelLeftClick	= _ => {
		if(panelRightStatus && windowWidth < 1024) panelRightStatusToggle(false)
		panelLeftStatusToggle(!panelLeftStatus)
	}
	const panelRightClick= _ => {
		if(panelLeftStatus && windowWidth < 1024) panelLeftStatusToggle(false)
		panelRightStatusToggle(!panelRightStatus)
	}

	const [windowWidth, resetWindowWidth] = useState(window.innerWidth)
	const updateWidth = _ => {
		resetWindowWidth(window.innerWidth)
	}
	useEffect( _ => {
		window.addEventListener('resize', updateWidth)
		return _ => window.removeEventListener('resize', updateWidth)
	})

	useEffect( _ => {init()}, loading)
	return (
		<Fragment>
			<LoadingBar />
			{
				loading === true
					? <div>wait</div>
					: <Fragment>
						<TogglePanel name="navigation" side="left" status={panelLeftStatus} clickFunction={panelLeftClick}>
							<UIMenu />
						</TogglePanel>
						<TogglePanel name="settings" side="right" status={panelRightStatus} clickFunction={panelRightClick}>
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
