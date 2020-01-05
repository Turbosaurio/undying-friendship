export const GET_MONGO_STUFF = 'GET_MONGO_STUFF'
export const TOGGLE_MONGO_PROP = 'TOGGLE_MONGO_PROP'

export const WIDGET_SETTINGS_KEYS = 'WIDGET_SETTINGS_KEYS'

export function receiveMongoStuff (val){
	return { type: GET_MONGO_STUFF, val}
}

export function toggleMongoProp (val){
	return { type: TOGGLE_MONGO_PROP, val}
}

export function widgetSettingsChange(val){
	return {
		type: WIDGET_SETTINGS_KEYS,
		val
	}
}
