import {
	GET_MONGO_STUFF,
	WIDGET_SETTINGS_KEYS,
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
		

		case WIDGET_SETTINGS_KEYS:
			/// id, key, data
			return{
				...state,
				widgets:{
					...state.widgets,
					[action.val.id]: {
						...state.widgets[action.val.id],
						widgetSettings:{
							...state.widgets[action.val.id].widgetSettings,
							[action.val.key]: action.val.data
						}
					}
				}
			}
		default: return state
	}
}