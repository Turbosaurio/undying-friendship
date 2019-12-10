import {
	GET_MONGO_STUFF,
	TOGGLE_MONGO_PROP
} from '../actions/mongo'

export default function mongo(
		state = {
			lala: true,
			lele: true
		},
		action
	){

	switch(action.type){
		case GET_MONGO_STUFF:
			return{
				...state,
				...action.val
			}
		case TOGGLE_MONGO_PROP:
		console.log(action.val)
			return{
				...state,
				[action.val] : !state[action.val]
			}
		default: return state
	}
}