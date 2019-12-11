import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading-bar'

import mongo from './mongo'
import finish from './finish'

export default combineReducers ({
	mongo,
	finish,
	loadingBar: loadingBarReducer,
})