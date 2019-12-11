import {
	GET_MONGO_STUFF,
	TOGGLE_MONGO_PROP
} from '../actions/mongo'

export default function mongo(
		state = {},
		action
	){

	switch(action.type){
		case GET_MONGO_STUFF:
			return{
				...state,
				...action.val
			}
		case TOGGLE_MONGO_PROP:
			return{
				...state,
				[action.val] : !state[action.val]
			}
		default: return state
	}
}