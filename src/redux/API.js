
export const mongoSample = {
	rows: [
		'c921a9cd-44c8-4584-9be2-bb67bd8f3645',
		'00ad6003-4b5d-4877-af37-1cf6042f74fe',
	],

	widgets: {
		'8c3875fb-8e8e-4ecc-a79f-d7bb75e07b61':{
			name: 'widget reinhold',
			type: 'widget',
			column: "a",
			rowID: 'c921a9cd-44c8-4584-9be2-bb67bd8f3645',
			list: [1,2,3,4,5,6,7,8,9],
		},
		'2500e0e7-ac1d-40f8-8146-9294638ed744':{
			name: 'widget jabi',
			type: 'widget',
			column: "b",
			rowID: 'c921a9cd-44c8-4584-9be2-bb67bd8f3645',
			list: [1,2,3,4,5,6,7,8,9],
		},
		'1d2ffe76-a7bd-43b8-a832-69e32b994415':{
			name: 'widget peter',
			type: 'widget',
			column: "c",
			rowID: 'c921a9cd-44c8-4584-9be2-bb67bd8f3645',
			list: [1,2,3,4,5,6,7,8,9],
		},

		'f39841d2-0b9a-42ba-9a5e-5740cac24234':{
			name: 'widget sanic',
			type: 'widget',
			column: "a",
			rowID: '00ad6003-4b5d-4877-af37-1cf6042f74fe',
			list: [1,2,3,4,5,6,7,8,9],
		},
		'0d2b89fa-b9f4-463a-b863-224e145e9b2a':{
			name: 'widget kerouac',
			type: 'widget',
			column: "b",
			rowID: '00ad6003-4b5d-4877-af37-1cf6042f74fe',
			list: [1,2,3,4,5,6,7,8,9],
		},
	},
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
	.then(([
		mongo,
		finish
	]) => ({
		mongo,
		finish
	}))
}

