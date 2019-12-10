import {getInitialData} from '../API'
import {receiveMongoStuff} from './mongo'

export const handleInitialData = _ =>{
	return (dispatch, getState) => {
		return getInitialData()
		.then(({mongo})=> {
			dispatch(receiveMongoStuff(mongo))
		})
	}
}