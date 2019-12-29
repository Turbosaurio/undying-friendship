import {
	GET_MONGO_STUFF,
	TOGGLE_MONGO_PROP,
	SETTINGS_KEYS,
} from '../actions/mongo'

export default function mongo(
		state = {
			rows: [],
			widgets: {},
			settings: {
				rows:{},
				columns:{},
				widgets:{}
			},
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
			return{
				...state,
				[action.val] : !state[action.val]
			}

		case SETTINGS_KEYS:
			return{
				...state,
				settings:{
					...state.settings,
					[action.val.component]:{
						...state.settings[action.val.component],
						[action.val.key] : action.val.data
					}
				}

			}
		default: return state
	}
}