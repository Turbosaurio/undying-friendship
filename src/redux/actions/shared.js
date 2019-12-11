import {showLoading, hideLoading}  from 'react-redux-loading-bar'

import {getInitialData} from '../API'
import {receiveMongoStuff} from './mongo'
import {receiveFinish} from './finish'



export const handleInitialData = _ =>{
	return (dispatch, getState) => {
		dispatch(showLoading())
		return getInitialData()
			.then(({
				mongo,

				}) => {
					dispatch(receiveMongoStuff(mongo))

					dispatch(receiveFinish('done'))
					dispatch(hideLoading())
				}
			)
	}
}