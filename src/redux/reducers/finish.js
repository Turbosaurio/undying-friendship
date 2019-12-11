import {RECEIVE_FINISH} from '../actions/finish'

export default function finish(state = {} , action){
	switch(action.type){
		case RECEIVE_FINISH:
			return action.val
		default: return state
	}
}