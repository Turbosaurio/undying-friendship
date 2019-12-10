import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import UIMenu from './components/ui_components/UIMenu'
import TogglePanel from './components/ui_components/TogglePanel'
import SomethingWithJSS from './components/ui_components/SomethingWithJSS'


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

const Jesus = _ => {
	return(
		<TogglePanel initial={true}>
			<SomethingWithJSS />
		</TogglePanel>
	)
}

function App() {
	return (
		<div className="App">
			<UIMenu />
			<Switch>
				<Route exact path="/" component={Baby} />
				<Route path="/jesus" component={Jesus}/>
				<Route component={viernullvier}/>
			</Switch>
		</div>
	);
}

export default withRouter(App)
