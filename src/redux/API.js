
const mongoSample = {
	lala: false,
	lele: false
}



function _getMongoStuff(){
	// TODO fetch stuff rom mongo
	return new Promise((res, rej) => {
		setTimeout( _ => res({...mongoSample}), 100)
	})
}


export const getInitialData = _ => {
	return Promise.all([
		_getMongoStuff()
	])
	.then(([mongo]) => ({
		mongo
	}))
}

